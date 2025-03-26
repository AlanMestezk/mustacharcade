import { Footer } from "@/components/footer";
import                           "./globals.css";
import { Header }            from "@/components/header";
import type { Metadata }     from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets : ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  icons      : "/LogoIcon.png",
  title      : "MustacheArcade",
  keywords   :['games', 'jogos', 'steam', 'epic games', 'indicação', 'análise', 'videogame', 'pc gamer'],
  description: "Neste site, você encontra análises e recomendações de jogos para quando não souber o que jogar.",

  openGraph:{
    images:[`${process.env.PROJECT_URL}/PreviewIcon.png`]
  },

  robots:{
    index    : true,
    follow   : true,
    nocache  : true,

    googleBot:{
      index       : true,
      follow      : true,
      noimageindex: true
    }
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
          {children}

      </body>
    </html>
  );
}
