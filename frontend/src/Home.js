import React from 'react'
import { Form, Button } from 'react-bootstrap'

export const Home = () => (
    <div style={{marginTop: "20px"}}>
        <h2 style={{textAlign: "center", fontWeight: "bold"}}> Sign-In to your account </h2>
        <Form style={{fontWeight: "bold"}}>
            <Form.Group>
                <Form.Label> Username </Form.Label>
                <Form.Control type="username" />
            </Form.Group>
            <Form.Group >
                <Form.Label> Password </Form.Label>
                <Form.Control type="password" />
            </Form.Group>
            <Button variant="primary" type="submit" style={{width: "100%", background: "#01b96b", color: "#fff", fontWeight: "bold", borderColor: "transparent"}}> Sign-In </Button>
        </Form>
        <br></br>
        <h5 style={{textAlign: "center"}}>
            Do not have an account?&nbsp;
            <a href="/register">Register</a>
        </h5>
    </div>
)