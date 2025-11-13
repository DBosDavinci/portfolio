import { Card } from "@heroui/card";
import { Spacer } from "@heroui/spacer";
import { useTranslations } from "next-intl";

import { normalText, subtitle, title } from "@/components/primitives";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <div>
      <h1 className={title()}>{t("title")}</h1>

      <Card className="mt-6 p-6">
        <h2 className={subtitle()}>{t("sd")}</h2>
        <p className={normalText({ size: "sm" })}>{t("about_sd")}</p>
        <Spacer y={6} />

        <h2 className={subtitle()}>{t("hobbies")}</h2>
        <p className={normalText({ size: "sm" })}>{t("about_hobbies")}</p>
      </Card>
    </div>
  );
}
