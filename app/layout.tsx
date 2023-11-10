import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LifeQuest",
  description:
    "Become your best self with LifeQuest. Complete daily habits to upgrade your stats!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-iron text-neutral-200">{children}</body>
    </html>
  );
}
