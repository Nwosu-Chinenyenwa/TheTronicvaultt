// emails/WelcomeEmail.jsx
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
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
  marginBottom: "24px",
};

const buttonContainer = {
  textAlign: "center",
  marginTop: "32px",
};

const button = {
  backgroundColor: "#f28b00",
  borderRadius: "4px",
  color: "#fff",
  display: "inline-block",
  fontSize: "16px",
  fontWeight: "600",
  padding: "12px 24px",
  textDecoration: "none",
};

export default function WelcomeEmail({ name, email, dashboardUrl }) {
  const displayName = name || email.split("@")[0];

  return (
    <Html>
      <Head />
      <Preview>Welcome to our platform!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Welcome, {displayName}!</Heading>
          <Text style={text}>
            Thank you for joining us. We're excited to have you on board.
          </Text>
          <Text style={text}>
            You can now access all features of our platform. If you have any
            questions, feel free to reach out.
          </Text>
          <Section style={buttonContainer}>
            <Link style={button} href={dashboardUrl}>
              Start Shop
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}