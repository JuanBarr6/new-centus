import {getTranslations} from "next-intl/server";
import OTPForm from "@/features/sub-features/auth/components/otp-error";
<<<<<<< HEAD

export default async function AuthPage() {
  const t = await getTranslations("AuthMessages");

=======
 
export default async function AuthPage() {
  const t = await getTranslations("AuthMessages");
 
>>>>>>> 4d53cb4b4b9ee7b231e4f1070df27151e8d10578
  return (
    <>
      <h1 className="sr-only">{t("login")}</h1>
      <OTPForm />
    </>
  );
}