import {getTranslations} from "next-intl/server";
import LoginForm from "@/features/sub-features/auth/components/login-form";

export default async function AuthPage() {
  const t = await getTranslations("AuthMessages");

  return (
    <div>
      <h1>{t("login")}</h1>
      <LoginForm />
    </div>
  );
}

