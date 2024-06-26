"use client";
import  {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "@/app/globals.css";

import EntryCard from "@/app/lib/EntryCard/page";

export default function Home() {

    const handleNewEntry = () => {
        window.location.href = "/newentry";
    }

    return (
        <Container fluid>
            {/* Top Row - for date  */}


            {/* Middle Row - start new entry */}
            <Row>
                <Col xs={2}></Col>
                <Col onClick={handleNewEntry} xs={8} id="startEntryCol">
                    <h2 className=" pt-4 d-flex justify-content-center align-content-center"> Start a new entry </h2>
                </Col>
                <Col xs={2}></Col>
            </Row>


            {/* Bottom Row - look over past entries (calendar) */}
            <Row>
                <Col xs={2}></Col>
                <Col xs={8}>
                    <h2> Some recent entries</h2>
                    <Row>
                        <Col xs={4}>
                            <EntryCard/>
                        </Col>
                        <Col xs={4}>
                            <EntryCard/>
                        </Col>
                        <Col xs={4}>
                            <EntryCard/>
                        </Col>

                    </Row>
                </Col>
                <Col xs={2}></Col>

            </Row>

        </Container>

    );
}
