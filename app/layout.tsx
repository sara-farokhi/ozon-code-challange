import { Inter } from "next/font/google";
import "../styles/globals.scss";
import ChatListHeader from "@/components/chat-list/ChatListHeader";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ position: "relative" }}>
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
