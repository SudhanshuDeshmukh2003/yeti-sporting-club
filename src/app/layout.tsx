import type { Metadata } from "next";
import { Oswald, Sora } from "next/font/google";
import "./globals.css";

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Sora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Yeti Sporting Club | Leh, Ladakh",
  description:
    "Yeti Sporting Club — football from the roof of the world. Based in Leh, Ladakh.",
  openGraph: {
    title: "Yeti Sporting Club",
    description: "Football from the roof of the world. Leh, Ladakh.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
