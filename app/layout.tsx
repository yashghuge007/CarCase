import "./globals.css";
import { Footer, Navbar } from "@/components";
import { LayoutProps } from "@/types";

export const metadata = {
  title: "CarCase",
  description: "The Best Car Booking Platform",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
