import { Card } from "@heroui/card";
import { Spacer } from "@heroui/spacer";
import { useTranslations } from "next-intl";

import { normalText, subtitle, title } from "@/components/primitives";
import { CssIcon, GithubIcon, HtmlIcon, JavascriptIcon, LaravelIcon, NextIcon, PhpIcon, ReactIcon } from "@/components/icons";
import SkillsBar from "@/components/skillsBar";

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
        <Spacer y={6} />

        <h2 className={subtitle()}>{t("skills")}</h2>
        <p className={normalText({ size: "sm" })}>{t("about_skills")}</p>

        <div className="mt-2">
          <SkillsBar skill="React" icon={<ReactIcon />} value={85} />
          <SkillsBar skill="Nextjs" icon={<NextIcon />} value={90} />
          <SkillsBar skill="Github" icon={<GithubIcon />} value={80} />
          <SkillsBar skill="Laravel" icon={<LaravelIcon />} value={55} />
          <SkillsBar skill="Javascript" icon={<JavascriptIcon />} value={90} />
          <SkillsBar skill="PHP" icon={<PhpIcon />} value={45} />
          <SkillsBar skill="HTML" icon={<HtmlIcon />} value={90} />
          <SkillsBar skill="CSS" icon={<CssIcon />} value={60} />
        </div>
      </Card >
    </div >
  );
}
