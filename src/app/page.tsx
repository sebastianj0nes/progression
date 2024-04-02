import { Container } from "react-bootstrap";
import Home from "@/app/landing/page";
import LoginForm from "@/app/ui/login-form";

export default function App(){
    return(
        <Container>
            <LoginForm/>
        </Container>
    )
}