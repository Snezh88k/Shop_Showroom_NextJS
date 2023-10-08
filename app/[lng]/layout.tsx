import "./globals.css";
import { Comfortaa } from "next/font/google";
import { HeaderLan } from "../../components/header/client";
import { FooterLan } from "@/components/footer/index";
import CartProvider from "../../redux/CartProvider";
import clsx from "clsx";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Script from "next/script";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const comfrotao = Comfortaa({ subsets: ["latin"] });

export const metadata = {
  title: "I AM",
  description: "Магазин женской одежды в Тбилиси",
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
      <meta
        name="google-site-verification"
        content="oiPWq1gn4yUP1DlXOdMXL0j5oxd3lHVqjG9xVdwy8fE"
      />
      <CartProvider>
        <body className={clsx(comfrotao.className, "body")}>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-W114QGHH7K" />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-W114QGHH7K');
        `}
          </Script>
          <header>
            <HeaderLan lng={lng} />
          </header>
          <main className="main">{children}</main>
          <footer>
            <FooterLan lng={lng} />
          </footer>
        </body>
      </CartProvider>
    </html>
  );
}
