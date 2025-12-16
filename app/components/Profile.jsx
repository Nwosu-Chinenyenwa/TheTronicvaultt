"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import toast from "react-hot-toast";
import Image from "next/image";
import cover from "../../public/images/cover-01.webp";
import { CiEdit } from "react-icons/ci";
import profilephote from "../../public/images/photo-1544005313-94ddf0286df2.avif";
import { MdForwardToInbox } from "react-icons/md";

export default function Profile({ user }) {
  const [profile, setProfile] = useState(null);
  const [fullName, setFullName] = useState("");
  const [saving, setSaving] = useState(false);

  const [lastPassword, setLastPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changing, setChanging] = useState(false);
  const [changeSuccess, setChangeSuccess] = useState(null);
  const [wins, setWins] = useState([]);
  const [claimingId, setClaimingId] = useState(null);
  const [changeError, setChangeError] = useState(false);

  const [signingOut, setSigningOut] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(null);

  const supabase = createClient(true);

  async function handleUpload(e, type) {
    const file = e.target.files[0];
    if (!file) return;

    const fileExt = file.name.split(".").pop();
    const fileName = `${user.id}-${type}-${Date.now()}.${fileExt}`;
    const filePath = `${type}s/${fileName}`;

    try {
      const { data, error: uploadError } = await supabase.storage
        .from(type === "avatar" ? "avatars" : "covers")
        .upload(filePath, file, { cacheControl: "3600", upsert: true });

      if (uploadError) throw uploadError;

      const { publicUrl, error: urlError } = supabase.storage
        .from(type === "avatar" ? "avatars" : "covers")
        .getPublicUrl(filePath);

      if (urlError) throw urlError;

      const updateData =
        type === "avatar"
          ? { avatar_url: publicUrl }
          : { cover_url: publicUrl };
      const { error: profileError } = await supabase
        .from("profiles")
        .update(updateData)
        .eq("id", user.id);

      if (profileError) throw profileError;

      setProfile((prev) => ({ ...prev, ...updateData }));
      toast.success(
        `${type === "avatar" ? "Profile" : "Cover"} image updated!`
      );
    } catch (err) {
      console.error("Upload error", err);
      toast.error("Failed to upload image");
    }
  }

  async function fetchWins() {
    try {
      const { data, error } = await supabase
        .from("wins")
        .select("id, prize, image, claimed, created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("fetchWins error", error);
        return;
      }

      setWins(data || []);
    } catch (err) {
      console.error("fetchWins exception", err);
    }
  }

  useEffect(() => {
    if (!user) return;
    fetchProfile();
    fetchWins();
  }, [user]);

  async function handleClaim(winId) {
    setClaimingId(winId);

    try {
      const { error } = await supabase
        .from("wins")
        .update({ claimed: true })
        .eq("id", winId)
        .eq("user_id", user.id);

      if (error) {
        toast.error("Failed to claim reward");
        return;
      }

      toast.success("Reward claimed successfully");
      fetchWins();
    } catch (err) {
      toast.error("Claim failed");
    } finally {
      setClaimingId(null);
    }
  }

  /*   useEffect(() => {
    if (!user) return;
    fetchProfile();
  }, [user]); */

  async function fetchProfile() {
    try {
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();
      if (sessionError) return;
      if (!sessionData?.session) return;

      let { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (
        error &&
        (error.code === "PGRST303" || /JWT expired/i.test(error.message || ""))
      ) {
        const { data: refreshData, error: refreshErr } =
          await supabase.auth.refreshSession();
        if (refreshErr) {
          await supabase.auth.signOut();
          window.location.href = "/login";
          return;
        }
        const retry = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();
        data = retry.data;
        error = retry.error;
      }

      if (error && error.code !== "PGRST116") return;

      setProfile(data ?? null);
      setFullName(data?.full_name ?? (user.email?.split("@")[0] || ""));
    } catch (err) {
      console.error("fetchProfile error", err);
    }
  }

  async function handleSave(e) {
    e?.preventDefault?.();
    setSaving(true);
    setSaveSuccess(null);
    try {
      const payload = {
        id: user.id,
        full_name: fullName,
      };

      const { error } = await supabase
        .from("profiles")
        .upsert(payload)
        .select();
      if (error) {
        console.error("upsert error", error);
        setSaveSuccess(false);
        toast.error("Failed to save profile");
      } else {
        setSaveSuccess(true);
        toast.success("Saved successfully");
        fetchProfile();
      }
    } catch (err) {
      console.error(err);
      setSaveSuccess(false);
      toast.error("Save failed");
    } finally {
      setSaving(false);
    }
  }

  async function handleChangePassword(e) {
    e?.preventDefault?.();
    setChanging(true);
    setChangeError(false);
    setChangeSuccess(null);

    if (!newPassword || newPassword !== confirmPassword) {
      setChangeError(true);
      setChangeSuccess(false);
      toast.error("Passwords must match");
      setChanging(false);
      return;
    }

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: lastPassword,
      });

      if (authError) {
        toast.error("Current password is incorrect");
        setChangeError(true);
        setChanging(false);
        return;
      }

      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        console.error("updateUser error", error);
        setChangeError(true);
        setChangeSuccess(false);
        toast.error(error.message || "Failed to change password");
      } else {
        setChangeSuccess(true);
        toast.success("Password updated.");
        setLastPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      console.error(err);
      setChangeError(true);
      setChangeSuccess(false);
      toast.error("Failed to update password");
    } finally {
      setChanging(false);
    }
  }

  async function handleSignOut() {
    setSigningOut(true);
    try {
      await supabase.auth.signOut();
      window.location.href = "/myaccount";
    } catch (err) {
      console.error("signout", err);
      toast.error("Sign out failed");
      setSigningOut(false);
    }
  }

  return (
    <>
      <div className="relative">
        <img
          src={
            profile?.cover_url ||
            "https://demo.nextadmin.co/_next/image?url=%2Fimages%2Fcover%2Fcover-01.png&w=2048&q=75"
          }
          alt="cover"
          className="w-full object-cover h-74 rounded-t-2xl"
        />
        <button
          className="absolute bottom-10 cursor-pointer right-6 flex items-center gap-2 bg-[#f28b00] text-white text-sm font-medium px-7 py-3 rounded-lg transition"
          onClick={() => document.getElementById("coverInput").click()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Edit Cover
        </button>
        <input
          type="file"
          id="coverInput"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleUpload(e, "cover")}
        />

        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <img
              src={
                profile?.avatar_url ||
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
              }
              alt="profile"
              className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
            />
            <div
              className="absolute bottom-2 right-2 w-7 h-7 bg-[#f28b00] text-white rounded-full flex items-center justify-center shadow cursor-pointer"
              onClick={() => document.getElementById("avatarInput").click()}
            >
              <CiEdit />
            </div>
            <input
              type="file"
              id="avatarInput"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleUpload(e, "avatar")}
            />
          </div>
        </div>
      </div>

      <div className="pt-20 flex justify-between">
        <div className="flex items-center gap-1">
          <MdForwardToInbox className="text-[#f28b00] mr-2 text-[25px]" />
          <p className="text-sm text-[#7a7e9a]">{user?.email}</p>
          <span className="h-2 rounded-full w-2 animate-pulse bg-[#f28b00]"></span>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
            Member
          </span>
          <span className="text-xs text-gray-400">
            Account ID: {user?.id?.slice(0, 8) ?? "—"}
          </span>
        </div>
      </div>

      <div className="my-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="flex items-center gap-3 mb-3 tracking-tight text-[#333333] font-bold text-2xl md:text-3xl">
              <span>Profile</span>
            </h2>
            <p className="mt-1 text-sm md:text-base text-[#7a7e9a] max-w-xl">
              Manage your account settings and preferences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-5">
          <section className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-[#00000045]">
              <h3 className="text-[20px] font-[400] text-[#2d2d2d]">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-[#7a7e9a]">
                Update your email and display name.
              </p>
            </div>

            <form onSubmit={handleSave}>
              <div className="p-6 space-y-5">
                <div className="space-y-2">
                  <label className="block text-[#484848]">Email</label>
                  <input
                    value={user?.email || ""}
                    disabled
                    className="w-full h-[40px] placeholder:text-[#727272] text-[#727272] rounded-[20px] border-2 border-[#e5e5e5] outline-none text-[13px] hover:border-[#cacaca] px-[30px]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[#484848]">Full Name</label>
                  <input
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full h-[40px] placeholder:text-[#727272] text-[#727272] rounded-[20px] border-2 border-[#e5e5e5] outline-none text-[13px] hover:border-[#cacaca] px-[30px]"
                  />
                </div>

                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="inline-block rounded-full cursor-pointer text-white font-sans bg-[#2d2d2d] h-[40px] leading-[40px] text-[13px] px-[52px] font-normal relative overflow-hidden z-3"
                >
                  {saving ? "Saving..." : "Change Name"}
                </button>
              </div>
            </form>
          </section>

          <section className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-[#00000045]">
              <h3 className="text-[20px] font-[400] text-[#2d2d2d]">
                Account Settings
              </h3>
              <p className="mt-1 text-sm text-[#7a7e9a]">
                Security settings for your account.
              </p>
            </div>

            <div className="p-6 space-y-6">
              <h4 className="text-[#333333] font-[400]  mb-3">
                Change Password
              </h4>
              <div className="p-4">
                <form onSubmit={handleChangePassword} className="space-y-3">
                  <div>
                    <label className="block text-[#484848 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      value={lastPassword}
                      onChange={(e) => setLastPassword(e.target.value)}
                      placeholder="Enter your current password"
                      className="w-full h-[40px] placeholder:text-[#727272] text-[#727272] rounded-[20px] border-2 border-[#e5e5e5] outline-none text-[13px] hover:border-[#cacaca] px-[30px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
                    <div>
                      <label className="block text-[#484848 mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="w-full h-[40px] placeholder:text-[#727272] text-[#727272] rounded-[20px] border-2 border-[#e5e5e5] outline-none text-[13px] hover:border-[#cacaca] px-[30px]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[#484848 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm new password"
                        className="w-full h-[40px] placeholder:text-[#727272] text-[#727272] rounded-[20px] border-2 border-[#e5e5e5] outline-none text-[13px] hover:border-[#cacaca] px-[30px]"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {changing ? (
                      <div>Updating...</div>
                    ) : (
                      <button
                        type="submit"
                        className="inline-block rounded-full cursor-pointer text-white font-sans bg-[#2d2d2d] h-[40px] leading-[40px] text-[13px] px-[52px] font-normal relative overflow-hidden z-3"
                        disabled={changing}
                      >
                        Change Password
                      </button>
                    )}

                    <div className="min-h-[22px]">
                      {changeSuccess === true && (
                        <div className="text-sm text-green-600">
                          Password updated.
                        </div>
                      )}
                      {changeSuccess === false && (
                        <div className="text-sm text-red-600">
                          Failed to update password.
                        </div>
                      )}
                    </div>
                  </div>

                  {changeError && (
                    <div className="text-sm text-red-600">{changeError}</div>
                  )}
                </form>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleSignOut}
                  className="h-[40px] w-full md:w-auto cursor-pointer text-[15px] font-[600] text-white px-[20px] rounded-full bg-[#f92400] hover:bg-[#d81e00] transition-all"
                  disabled={signingOut}
                >
                  {signingOut ? "Signing out..." : "Sign out"}
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-white rounded-2xl shadow-sm overflow-hidden mt-8">
        <div className="px-6 py-5 border-b  border-[#00000045]">
          <h3 className="text-[20px] font-[400] text-[#2d2d2d]">
            Your Rewards
          </h3>
          <p className="mt-1 text-sm md:text-base text-[#7a7e9a] max-w-xl">
            Prizes you have won.
          </p>
        </div>

        <div className="p-6">
          {wins.length === 0 ? (
            <p className="text-sm text-[#7a7e9a]">No rewards yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {wins.map((win) => (
                <div
                  key={win.id}
                  className="flex items-center gap-4 border border-[#e5e5e5] rounded-xl p-4"
                >
                  {win.image && (
                    <img
                      src={win.image}
                      alt={win.prize}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  )}

                  <div className="flex-1">
                    <p className="text-[#484848] font-medium">{win.prize}</p>
                    <p className="text-xs text-[#484848]">
                      Won on {new Date(win.created_at).toLocaleDateString()}
                    </p>
                  </div>

                  {win.claimed ? (
                    <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
                      Claimed
                    </span>
                  ) : (
                    <button
                      onClick={() => handleClaim(win.id)}
                      disabled={claimingId === win.id}
                      className="text-xs px-4 py-2 rounded-full bg-[#f28b00] cursor-pointer text-white"
                    >
                      {claimingId === win.id ? "Claiming....." : "Claim Reward"}
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
