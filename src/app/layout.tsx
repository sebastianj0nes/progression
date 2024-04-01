import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import DateComponent from "@/app/lib/DateComponent/page";
import  {Row} from "react-bootstrap";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logging App",
  description: "Lonewolfgang Only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Row className="text-center">
        <DateComponent/>
      </Row>
      {children}</body>
    </html>
  );
}
