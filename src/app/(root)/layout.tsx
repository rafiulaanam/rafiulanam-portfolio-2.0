import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anam Developer - Full Stack Developer",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bgp">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
