import type { Metadata } from "next";
import { LatoFont } from "@/shared/styles/fonts";
import { ViewTransitions } from "next-view-transitions";

import { ThemeProvider } from "@/shared/providers/theme-provider";

import "@/shared/styles/globals.css";

export const metadata: Metadata = {
  title: "Code Snippets",
  description: "a Project to explore the code snippets",
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "twitter:title": "",
    "twitter:description": "",
    "twitter:url": "",
    "twitter:domain": "danieloo.vercel.app",
    "twitter:image": "",
    "twitter:card": "summary_large_image",
    "og:title": "",
    "og:description": "",
    "og:url": "",
    "og:image": "",
    "og:type": "website",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={LatoFont.className}>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
};

export default RootLayout;
