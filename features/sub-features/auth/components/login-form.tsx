"use client";

import {useTranslations} from "next-intl";

export default function LoginForm() {
  const t = useTranslations("AuthMessages");

  return <h1>{t("login")} desde el cliente</h1>;
}
