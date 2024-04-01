'use client';
import { useState } from "react";
import {Col, Container, Row, Button} from "react-bootstrap";
import {createEntry} from "@/app/lib/actions";


type Inputs = {
    example: string
    exampleRequired: string
}

export default function NewEntry() {

    const [entry, setEntry] = useState({
        date: Date.toString(),
        feelings : "",
        goals : "",
        accomplishments : "",
        score: ""
    });


    const handleInput = (e: { persist: () => void; target: { name: any; value: any; }; }) => {

        setEntry({...entry, [e.target.name]: e.target.value })
    }


    return (
        <Container fluid>
            <Row>
                <Col className="text-center">
                    <form action={createEntry}>
                        <Col className="p-3">
                            <label>Date</label>
                            <input type="date" name="date" value={entry.date} onChange={handleInput}></input>
                        </Col>

                        <Col className="p-3">
                            <label>How are you feeling?</label>
                            <input type="text" name="feelings" value={entry.feelings} onChange={handleInput}/>
                        </Col>

                        <Col className="p-3">
                            <label>What are your current short-term goals?</label>
                            <input type="text" name="goals" value={entry.goals} onChange={handleInput}/>
                        </Col>

                        <Col className="p-3">
                            <label>List some recent wins your happy with</label>
                            <input type="text" name="accomplishments" value={entry.accomplishments} onChange={handleInput}/>
                        </Col>

                        <Col className="p-3">
                            <label>Give yourself a score for overall current mood</label>
                            <input type="number" name="score" value={entry.score} onChange={handleInput}/>
                        </Col>

                        <Button type="submit">Submit</Button>

                    </form>
                </Col>
            </Row>

        </Container>

    )
}

