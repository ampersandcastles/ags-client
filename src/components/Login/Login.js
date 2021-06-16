import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'; //1

const Login = (props) => {
    const [username, setUsername] = useState(''); //2
    const [password, setPassword] = useState(''); //2


    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:4004/user/login', {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }) 
        .then(response => response.json())
        .then(data => 
            // console.log(data)
            props.updateToken(data.token)
            )
        .catch(err => console.log(err))
        
    }


    return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label> 
                    <Input onChange={(e)=> setUsername(e.target.value)} name="username" value={username}/> {/* 3 */}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} /> {/* 3 */}
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login;