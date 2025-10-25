// Types are globally declared in types/global.d.ts

'use server'

import { auth } from "@/lib/better-auth/auth";
import { inngest } from "../inngest/client";
import { headers } from "next/headers";

export const signUpWithEmail = async (formData: SignUpFormData) => {
  try {
    const { email, password, fullName, country, investmentGoals, riskTolerance, preferredIndustry } = formData;
    const betterAuth = await auth();

    const response = await betterAuth.api.signUpEmail({
      body: { email, password, name: fullName },
    });

    if (response?.user) {
      await inngest.send({
        name: "app/user.created",
        data: {
          email,
          name: fullName,
          country,
          investmentGoals,
          riskTolerance,
          preferredIndustry,
        },
      });
    }

    return { success: true, data: response };
  } catch (e) {
    console.error("Sign up failed:", e);
    const errorMessage = e instanceof Error ? e.message : "Sign up failed";
    return { success: false, error: errorMessage };
  }
};

export const signOut = async () => {
  try {
    const betterAuth = await auth();
    await betterAuth.api.signOut({ headers: await headers() });
    return { success: true };
  } catch (e) {
    console.error("Sign out failed:", e);
    return { success: false, error: "Sign out failed" };
  }
};

export const signInWithEmail = async (formData: SignInFormData) => {
  try {
    const { email, password } = formData;
    const betterAuth = await auth();

    const response = await betterAuth.api.signInEmail({
      body: { email, password },
    });

    return { success: true, data: response };
  } catch (e) {
    console.error("Sign in failed:", e);
    const errorMessage = e instanceof Error ? e.message : "Sign in failed";
    return { success: false, error: errorMessage };
  }
};