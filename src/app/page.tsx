"use client";
import {Button, Col, Container, InputGroup, Row, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import DateComponent from "@/app/lib/DateComponent/page";
import "./globals.css";
import Calendar from "@/app/lib/Calendar/page";

export default function Home() {

    return (
        <Container fluid>
            {/* Top Row - for date  */}
            <Row>
                <Col className="text-center" xs={12}>
                    <DateComponent/>
                </Col>
            </Row>


            {/* Middle Row - start new entry */}
            <Row>
                <Col xs={2}></Col>
                <Col xs={8} id="startEntryCol">
                    <h2 className=" pt-4 d-flex justify-content-center align-content-center"> Start a new entry </h2>
                </Col>
                <Col xs={2}></Col>
            </Row>


            {/* Bottom Row - look over past entries (calendar) */}
            <Row>
                <Col xs={2}></Col>
                <Col xs={8}>
                    <Calendar/>
                </Col>
                <Col xs={2}></Col>

            </Row>

        </Container>

  );
}
