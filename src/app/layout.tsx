import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import StructuredData, {
  localBusinessSchema,
} from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://slospas.com"),
  title: {
    default:
      "SLO Spas | Authorized Jacuzzi Dealer in San Luis Obispo, CA",
    template: "%s | SLO Spas - San Luis Obispo",
  },
  description:
    "SLO County's exclusive authorized Jacuzzi dealer since 1986. Shop hot tubs, swim spas, infrared saunas, cold plunges, and Covana automated spa covers in San Luis Obispo, CA. Free quotes and professional installation.",
  keywords: [
    "hot tubs San Luis Obispo",
    "Jacuzzi dealer SLO",
    "spa store San Luis Obispo",
    "swim spas Central Coast",
    "infrared sauna SLO County",
    "cold plunge San Luis Obispo",
    "Covana spa covers",
    "hot tub installation SLO",
    "Jacuzzi hot tubs California",
    "backyard wellness San Luis Obispo",
    "Clearlight sauna dealer",
    "hot tub repair San Luis Obispo",
    "SLO Spas",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://slospas.com",
    siteName: "SLO Spas",
    title:
      "SLO Spas | Authorized Jacuzzi Dealer in San Luis Obispo, CA",
    description:
      "SLO County's exclusive authorized Jacuzzi dealer since 1986. Hot tubs, swim spas, infrared saunas, cold plunges, and Covana covers. Free quotes and professional installation.",
    images: [
      {
        url: "/images/JHT_J508_Platinum_Flax_Seaside_SRGB-Full.jpg",
        width: 1200,
        height: 630,
        alt: "SLO Spas - Authorized Jacuzzi Dealer in San Luis Obispo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SLO Spas | Authorized Jacuzzi Dealer in San Luis Obispo, CA",
    description:
      "SLO County's exclusive Jacuzzi dealer since 1986. Hot tubs, swim spas, saunas, cold plunges & Covana covers.",
    images: ["/images/JHT_J508_Platinum_Flax_Seaside_SRGB-Full.jpg"],
  },
  alternates: {
    canonical: "https://slospas.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <StructuredData data={localBusinessSchema} />
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
