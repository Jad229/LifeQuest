import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { Squada_One } from "next/font/google";

const SquadaOne = Squada_One({
  weight: "400",
  subsets: ["latin"],
});

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
      <body className={`${SquadaOne.className} max-w-6xl mx-auto p-4`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {session && <Navbar />}
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
