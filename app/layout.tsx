import { Inter } from "next/font/google";
import "../styles/globals.scss";
import ChatListHeader from "@/components/chat-list/ChatListHeader";
// import MainContainer from "@/components/MainContainer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
