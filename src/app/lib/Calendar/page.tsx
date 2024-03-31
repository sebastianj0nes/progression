import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {Col, Container, Row} from "react-bootstrap";


export default function Calendar () {

return(
    <Container fluid>
                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                />
    </Container>
)
}