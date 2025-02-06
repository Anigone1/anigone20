import AppProvider from "@/providers/app-provider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hianimetv.in"),
  title: "Hianime | Watch your favorite anime",
  description: "Watch your favorite anime for free without any ads & popups.",
  openGraph: {
    images: "",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics Script */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-NTNTLYGLNN`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NTNTLYGLNN', {
                page_path: window.location.pathname,
              });
            `,
          }}
        ></script>

        {/* Ad Script */}
        <script
          type="text/javascript"
          src="//pl25788243.profitablecpmrate.com/2f/cb/a6/2fcba6ba994b78a08673dfe42e44d85b.js"
          async
        ></script>
      </head>
      <body className={`${poppins.className} antialiased`}>
        <AppProvider>
          <main>{children}</main>
          <Analytics />
        </AppProvider>
      </body>
    </html>
  );
}
