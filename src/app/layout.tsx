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
          data-cfasync="false"
          dangerouslySetInnerHTML={{
            __html: `
              /*<![CDATA[/* */
              (function(){var e=window,l="bcc7c0d44350bb442cbac5678173c3ca",d=[["siteId",993+855+658+637+279+5139607],["minBid",0.002],["popundersPerIP","0:1"],["delayBetween",3],["default",false],["defaultPerDay",0],["topmostLayer","auto"]],v=["d3d3LmRpc3BsYXl2ZXJ0aXNpbmcuY29tL294aXZlbHlqcy5taW4uY3Nz","ZDNtem9rdHk5NTFjNXcuY2xvdWRmcm9udC5uZXQvbC9pZW5xdWlyZS5taW4uanM="],k=-1,z,i,x=function(){clearTimeout(i);k++;if(v[k]&&!(1764332265000<(new Date).getTime()&&1<k)){z=e.document.createElement("script");z.type="text/javascript";z.async=!0;var m=e.document.getElementsByTagName("script")[0];z.src="https://"+atob(v[k]);z.crossOrigin="anonymous";z.onerror=x;z.onload=function(){clearTimeout(i);e[l.slice(0,16)+l.slice(0,16)]||x()};i=setTimeout(x,5E3);m.parentNode.insertBefore(z,m)}};if(!e[l]){try{Object.freeze(e[l]=d)}catch(e){}x()}})();
              /*]]>/* */
            `,
          }}
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
