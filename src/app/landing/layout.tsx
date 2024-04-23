import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css';
import DateComponent from "@/app/lib/DateComponent/page";
import  {Row, Col, Container} from "react-bootstrap";
import Logout from "@/app/logout/page";

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
      <Container fluid>
          <Row>
              <Col xs={12} className="text-end">
                  <Logout/>
              </Col>
              <Col xs={12} className="text-center">
                  <DateComponent/>

              </Col>

          </Row>
          {children}
      </Container>

      </body>
    </html>
  );
}
