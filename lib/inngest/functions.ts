import { inngest } from "@/lib/inngest/client";
import { sendWelcomeEmail } from "../nodemailer";

export const sendSignUpEmail = inngest.createFunction(
  { id: "sign-up-email" },
  { event: "app/user.created" },
  async ({ event, step }) => {
    try {
      const { email, name } = event.data;

      if (!email || !name) {
        console.warn("[INNGEST] Missing email or name in event data:", event.data);
        return { success: false, error: "Missing email or name" };
      }

      const introText =
        "Thanks for joining Signalist! You now have the tools to track markets and make smarter moves.";

      await step.run("send-welcome-email", async () => {
        await sendWelcomeEmail({ email, name, intro: introText });
      });

      console.log("[INNGEST] ✅ Welcome email sent to:", email);
      return { success: true, message: "Welcome email sent successfully." };
    } catch (error) {
      console.error("[INNGEST] ❌ Error in sendSignUpEmail:", error);
      return { success: false, error: "Failed to send welcome email." };
    }
  }
);