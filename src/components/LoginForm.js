import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { bindActionCreators } from 'redux';
import { AuthActions } from '../redux/store';
import { useDispatch } from 'react-redux';
import { Button, Form, Card } from 'react-bootstrap';
const LoginForm = (props) => {
    const [facebookLink, setFacebookLink] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const actions = bindActionCreators({ ...AuthActions }, useDispatch())
    const getFacebookLink = async () => {
        const res = await axios.get(`http://localhost:4000/api/auth/facebook`)
        console.log(res.data)
        setFacebookLink(res.data);
    }
    useEffect(() => {
        getFacebookLink();
    })
    const LoginPSU = (e) => {
        e.preventDefault();
        // const { username, password } = e.target.elements;
        // console.log(username.value, password.value)
        actions.loginPSU(username, password);
    }
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column bd-highlight mb-2">
                    <h1> LOGIN HW8</h1>
                    <div>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src="https://www.thumbsup.in.th/wp-content/uploads/2020/03/fb-hero-image-001.jpeg" />
                            <Card.Body>
                                <Card.Title>Facebook LOGIN</Card.Title>
                                <Card.Text>
                                    Iffan pathan
                                    6035512015
                            </Card.Text>
                                <Button variant="outline-primary" href={facebookLink}>LOGIN</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    {' '}
                    <div>
                        <div >
                            <form>
                                <div>
                                    <div>
                                        {/* USERNAME : <input type="text" name="username" />
                            PASSWORD : <input type="password" name="password" /> */}
                                        <div>
                                            <Card style={{ width: '20rem' }}>
                                                <Card.Img variant="top" src="https://www.phuket.psu.ac.th/wp-content/uploads/2019/03/cropped-PSU_PHUKET-EN.png" />
                                                <Card.Body>
                                                    <Card.Title>PSU LOGIN</Card.Title>
                                                    <Card.Text>
                                                        <Form style={{ width: '18rem' }}>
                                                            <Form.Group controlId="formBasicEmail">
                                                                <Form.Label>Username</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Username" name="username" onChange={(e)=>setUsername(e.target.value)}/>
                                                            </Form.Group>
                                                            <Form.Group controlId="formBasicPassword">
                                                                <Form.Label>Password</Form.Label>
                                                                <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                                                            </Form.Group>
                                                        </Form>
                                                    </Card.Text>
                                                    <Button variant="outline-warning" onClick={LoginPSU}>LOGIN</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default LoginForm;