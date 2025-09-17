import {Button} from "@/features/components/ui/button";
import {getTranslations} from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("ExampleText");
  return (
    <>
      <p className="text-primary">
        {t("label")} {t("greeting")}
      </p>
      <p>{t("farewell")}</p>
      <Button variant="secondary">Prueba</Button>
    </>
  );
}
