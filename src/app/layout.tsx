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
  metadataBase: new URL("https://www.anigone.com"),
  title: "AniGone | Watch your favorite anime",
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
          src={`https://www.googletagmanager.com/gtag/js?id=G-FHH3STLSC4`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FHH3STLSC4', {
                page_path: window.location.pathname,
              });
            `,
          }}
        ></script>

        {/* Ad Script */}
        <script
          type="text/javascript"
          src="//evendisciplineseedlings.com/ca/86/51/ca86514362b783b9e9d69e455eca31f5.js"
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
