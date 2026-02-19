import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact SLO Spas for a free quote on Jacuzzi hot tubs, swim spas, infrared saunas, and cold plunges. Visit our showroom at 3035 Broad Street, San Luis Obispo, CA 93401 or call (805) 544-3565.",
  alternates: {
    canonical: "https://slospas.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
