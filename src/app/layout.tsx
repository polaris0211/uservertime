import type { Metadata } from "next";
import Provider from "@/components/Provider";
import { Inter } from "next/font/google";
import { mainElement } from "@/css/layout.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className={mainElement}>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
