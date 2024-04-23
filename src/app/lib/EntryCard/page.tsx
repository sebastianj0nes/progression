'use client';
import {Card, Col, Container, Row} from "react-bootstrap";


function EntryCard () {

    return(
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            {/* Date of entry */}
                            <h2></h2>
                        </Card.Header>

                        <Card.Body>
                            {/* Content of entry */}
                            <h2></h2>
                        </Card.Body>

                        <Card.Footer>
                            {/* Maybe link to open out entry? */}
                            <h2></h2>
                        </Card.Footer>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default EntryCard;
