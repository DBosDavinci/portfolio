"use client"

import { useForm, ValidationError } from "@formspree/react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Form } from "@heroui/form";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input"
import { useTranslations } from "next-intl";


export default function ContactForm() {
    const t = useTranslations("Contact");

    const { executeRecaptcha } = useGoogleReCaptcha();
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_formkey!, {
        data: { "g-recaptcha-response": executeRecaptcha }
    });

    if (state.succeeded) {
        return <p>{t("form.submission")}</p>;
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Input id="email" label={t("form.email")} type="email" name="email" />

                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <Textarea id="message" label={t("form.message")} name="message" />

                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <Button type="submit" disabled={state.submitting}>{t("form.submit")}</Button>

                <ValidationError errors={state.errors} />
            </Form>
            <p className="text-sm text-default-500 mt-4">
                This form is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                    Privacy Policy
                </a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">
                    Terms of Service
                </a> apply.
            </p>
        </>
    );
}