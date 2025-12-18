import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.25",
  marginBottom: "24px",
  textAlign: "center",
};

const text = {
  color: "#555",
  fontSize: "16px",
  lineHeight: "1.5",
  marginBottom: "16px",
};

const codeContainer = {
  backgroundColor: "#f4f4f4",
  borderRadius: "4px",
  padding: "16px",
  margin: "24px 0",
  textAlign: "center",
  fontFamily: "monospace",
};

const code = {
  fontSize: "24px",
  fontWeight: "600",
  color: "#f28b00",
  letterSpacing: "8px",
};

export default function ResetPasswordEmail({ email, code }) {
  return (
    <Html>
      <Head />
      <Preview>Your password reset code</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Password Reset Request</Heading>

          <Text style={text}>
            You requested a password reset for your account. Use the
            verification code below to proceed:
          </Text>

          <Section style={codeContainer}>
            <Text style={code}>{code}</Text>
          </Section>

          <Text style={text}>
            This code will expire in 15 minutes.
          </Text>

          <Text style={text}>
            If you did not request a password reset, please ignore this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}