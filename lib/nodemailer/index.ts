import nodemailer from "nodemailer";
import {
  WELCOME_EMAIL_TEMPLATE,
  NEWS_SUMMARY_EMAIL_TEMPLATE,
} from "@/lib/nodemailer/templates";

const NODEMAILER_EMAIL = process.env.NODEMAILER_EMAIL;
const NODEMAILER_PASSWORD = process.env.NODEMAILER_PASSWORD;

if (!NODEMAILER_EMAIL || !NODEMAILER_PASSWORD) {
  throw new Error(
    "NODEMAILER_EMAIL and NODEMAILER_PASSWORD environment variables are required"
  );
}

const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: NODEMAILER_EMAIL,
    pass: NODEMAILER_PASSWORD,
  },
});

export const sendWelcomeEmail = async ({
  email,
  name,
  intro,
}: WelcomeEmailData) => {
  if (!isValidEmail(email)) {
    throw new Error(`Invalid email address: ${email}`);
  }

  const htmlTemplate = WELCOME_EMAIL_TEMPLATE
    .replace("{{name}}", name)
    .replace("{{intro}}", intro)
    .replace("{{dashboardUrl}}", "https://signalist.app/dashboard")
    .replace("{{unsubscribeUrl}}", "https://signalist.app/unsubscribe");

  const mailOptions = {
    from: `"Signalist" <signalist@jsmastery.pro>`,
    to: email,
    subject: `Welcome to Signalist - your stock market toolkit is ready!`,
    text: "Thanks for joining Signalist",
    html: htmlTemplate,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error(`❌ Failed to send welcome email to ${email}:`, err);
    throw new Error("Failed to send welcome email");
  }
};

export const sendNewsSummaryEmail = async ({
  email,
  date,
  newsContent,
}: {
  email: string;
  date: string;
  newsContent: string;
}): Promise<void> => {
  if (!isValidEmail(email)) {
    throw new Error(`Invalid email address: ${email}`);
  }

  const htmlTemplate = NEWS_SUMMARY_EMAIL_TEMPLATE
    .replace("{{date}}", date)
    .replace("{{newsContent}}", newsContent)
    .replace("{{dashboardUrl}}", "https://signalist.app/dashboard")
    .replace("{{unsubscribeUrl}}", "https://signalist.app/unsubscribe");

  const mailOptions = {
    from: `"Signalist News" <signalist@jsmastery.pro>`,
    to: email,
    subject: `📈 Market News Summary Today - ${date}`,
    text: `Today's market news summary from Signalist`,
    html: htmlTemplate,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error(`❌ Failed to send news summary email to ${email}:`, err);
    throw new Error("Failed to send news summary email");
  }
};