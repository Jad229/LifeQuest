import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";

export const metadata: Metadata = {
  title: "LifeQuest",
  description:
    "Become your best self with LifeQuest. Complete daily habits to upgrade your stats!",
};

type Session = {
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: Session | null = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="dark" defaultTheme="system">
          {session && <Navbar />}
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
