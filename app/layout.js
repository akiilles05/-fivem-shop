import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fivem Script Shop",
  description: "DD Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu" data-theme="daeavid">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
