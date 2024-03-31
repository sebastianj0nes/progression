
import {Container} from "react-bootstrap";


export default function DateComponent () {


const date = new Date();
const formattedDate = date.toDateString();


    return (
        <Container fluid>
            <h2>{formattedDate}</h2>
        </Container>
    )
}