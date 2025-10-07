import {getTranslations} from "next-intl/server";
import OTPForm from "@/features/sub-features/auth/components/otp-error";

 
export default async function AuthPage() {
  const t = await getTranslations("AuthMessages");
 
  return (
    <>
      <h1 className="sr-only">{t("login")}</h1>
      <OTPForm />
    </>
  );
}