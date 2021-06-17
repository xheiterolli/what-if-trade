import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Home } from './Home'

export const Register = () => (

    <div style={{marginTop: "20px"}}>
        <h2 style={{textAlign: "center", fontWeight: "bold"}}> Register your account </h2>
        <Form style={{fontWeight: "bold"}}>
            <Form.Group>
                <Form.Label> Username </Form.Label>
                <Form.Control type="username" />
            </Form.Group>
            <Form.Group >
                <Form.Label> Password </Form.Label>
                <Form.Control type="password" />
            </Form.Group>
            <Button variant="primary" type="submit" style={{width: "100%", background: "#01b96b", color: "#fff", fontWeight: "bold", borderColor: "transparent"}}> Register </Button>
        </Form>
        <br></br>
        <h5 style={{textAlign: "center"}}>
            Already have an account?&nbsp;
            <a href="/">Sign-In</a>
        </h5>
    </div>
)