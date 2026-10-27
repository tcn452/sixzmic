import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sixzmic.com"),
  title: "Sixzmic | Global Publisher of Original IP across Comics, Games & Animation",
  description:
    "Sixzmic is a global entertainment publisher discovering, housing, protecting, and distributing original serialized comics, interactive games, and animation.",
  keywords: [
    "Sixzmic",
    "publisher",
    "comics",
    "games",
    "animation",
    "African comics",
    "original IP",
    "licensing",
    "transmedia",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/logo/sixzmic-submark.png",
  },
  openGraph: {
    title: "Sixzmic | Global Publisher of Original IP",
    description:
      "Discovering, protecting, and distributing original IP across comics, games, and animation.",
    images: ["/logo/sixzmic-logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sixzmic | Global Publisher of Original IP",
    description:
      "Discovering, protecting, and distributing original IP across comics, games, and animation.",
    images: ["/logo/sixzmic-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-sixzmic-bg text-sixzmic-white antialiased selection:bg-sixzmic-lime selection:text-black">
        {children}
      </body>
    </html>
  );
}
