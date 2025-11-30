"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <HeroUIProvider>
      <NextThemesProvider {...themeProps} disableTransitionOnChange>
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_captchakey!}>
          {children}
        </GoogleReCaptchaProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
