import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barking Bayside Bungalow | Villas, NJ",
  description: "Cozy pet-friendly bayside short-term rental in Villas, NJ 08251.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
