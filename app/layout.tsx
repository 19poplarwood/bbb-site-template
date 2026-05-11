import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barking Bayside Bungalow | Villas, NJ",
  description: "Cozy pet-friendly bayside bungalow in Villas, NJ with swim spa, Happy Crab Lounge, outdoor shower, coastal bedrooms, and direct booking requests.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
