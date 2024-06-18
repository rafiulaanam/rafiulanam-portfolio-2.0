import { Metadata } from "next";
import Navbar from "../../components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Home | Rafiul Anam",
  description: "This is the Home page of Rafiul Anam",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bgp">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
