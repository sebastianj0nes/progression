import { Container, Row, Col, Button } from "react-bootstrap";
import {signUpUser} from "@/app/lib/actions";


export default function SignupForm() {
    return(
        <Container fluid>
            <Row>
                <Col xs={12}>
                    Sign Up

                    <form action={signUpUser}>
                        <label>Name</label>
                        <input type="text" name="name" required/>
                        <label>Email</label>
                        <input type="text" name="email" required/>
                        <label>Password</label>
                        <input type="text" name="password" required/>
                        <Button type="submit"> Submit </Button>
                    </form>
                </Col>


            </Row>
        </Container>
    )
}