"use server";
import { signIn } from "../../../../auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export default async function loginAction(_prevState: any, formData: FormData) {
  try {
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: true,
      redirectTo: "/dashboard",
    });
    return {
      success: true,
    };
  } catch (e: any) {
    if (isRedirectError(e)) {
      throw e;
    }

    if (e.type === "CredentialsSignin") {
      return {
        success: false,
        error: "Dados de Login incorretos.",
      };
    }
    return { success: false, error: "Algo deu errado." };
  }
}
