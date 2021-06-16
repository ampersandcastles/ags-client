import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap"; //1
import APIURL from "../../helpers/Environment";
import "./Login.css";

const Login = (props) => {
  const [email, setEmail] = useState(""); //2
  const [password, setPassword] = useState(""); //2

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/user/login`, {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.updateToken(data.token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
          />{" "}
          {/* 3 */}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
          />{" "}
          {/* 3 */}
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
