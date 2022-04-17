import React from 'react';
import { Button, Form } from 'react-bootstrap';
import  './Login.scss';

function Login() {
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <Form style={{width:"80%", marginLeft:"10%" ,marginTop: "23%" }}>
            <Form.Group>
                <Form.Control type="username" placeholder="Username"/>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            <br/>
            <Button class="button" role="button" type="Sign up"> Sign up</Button>
        </Form>
    </div>
  )
}

export default Login;