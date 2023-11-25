import { Inter } from "next/font/google";
import "../styles/globals.scss";
import { Provider } from "@/context/Context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ position: "relative" }}>
      <Provider>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
