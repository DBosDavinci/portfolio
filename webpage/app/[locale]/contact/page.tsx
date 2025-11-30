import { useTranslations } from "next-intl";

import { title } from "@/components/primitives";
import { Card } from "@heroui/card";
import ContactForm from "@/components/contactForm";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <div>
      <h1 className={title()}>{t("title")}</h1>
      <Card className="mt-6 p-6">
        <ContactForm />
      </Card>
    </div>
  );
}
