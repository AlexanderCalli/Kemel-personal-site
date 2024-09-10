import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import ClientLayout from "@/components/ClientLayout";
import ConditionalTechCursorAnimation from '@/components/ConditionalTechCursorAnimation'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kemel - A Full Stack Developer",
  description: "Personal website of Kemel, a Full Stack Developer creating fantastic websites using React.",
  icons: {
    icon: '/next.svg',
    shortcut: '/next.svg',
    apple: '/next.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/next.svg',
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} light min-h-screen flex flex-col`}>
        <div className="background-image-top"></div>
        <div className="background-image-bottom"></div>
        <Header />
        <ClientLayout>
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-24">
            {children}
          </main>
        </ClientLayout>
        <ConditionalTechCursorAnimation />
        <Footer />
      </body>
    </html>
  );
}
