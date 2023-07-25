import "./globals.css";
import { Inter } from "next/font/google";

import Header from "@/components/header/Header";
import { HeaderLan } from "../../components/header/client";
import Footer from "@/components/footer/Footer";

import CartProvider from "../../redux/CartProvider";
import clsx from "clsx";

import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Script from "next/script";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "I AM",
  description: "shop",
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-W114QGHH7K" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-W114QGHH7K');
        `}
      </Script>
      <CartProvider>
        <body className={clsx(inter.className, "body")}>
          <header>
            <HeaderLan lng={lng} />
          </header>
          <main className="main">{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </CartProvider>
    </html>
  );
}
