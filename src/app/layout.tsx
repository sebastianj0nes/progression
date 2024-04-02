import type { Metadata } from "next";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import DateComponent from "@/app/lib/DateComponent/page";
import  {Row} from "react-bootstrap";

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
      <body>
      <Row className="text-center">
        <DateComponent/>
      </Row>
      {children}</body>
    </html>
  );
}
