import {useEffect, useState} from "react";
import {Button, Container, Form, FormGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {signup} from "../modules/requests";
import {SIGNUP_MESSAGE} from "../modules/Reducer";

export default () => {

    const dispatch = useDispatch();
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [firstName, setFirstname] = useState('');
    let [lastName, setLastname] = useState('');
    const [isSigningUp, setSigningUp] = useState(false);
    const signupMessage = useSelector(state => state.signupMessage)


    const handleClick = () => {
        setSigningUp(true)
        setTimeout(() => setSigningUp(false),2000)
    }

    function onSubmit(event) {
        event.preventDefault();
        if (!isSigningUp) {handleClick()}
        setTimeout(() => dispatch(signup(username, password, firstName, lastName)),2000);
        setTimeout(() => dispatch({type: SIGNUP_MESSAGE, data: ""}),5000)
    }

    useEffect(() => {
    }, [signupMessage])
    return (<>
        {"Not currently a user?"}
        <br/>
        {"Use the form below to sign up!"}
        <br/>
        <br/>
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Form.Label>Username</Form.Label>
                <Form.Control type={"text"} onChange={event => setUsername(event.target.value)}></Form.Control>
            </FormGroup>

            <FormGroup>
                <Form.Label>Password</Form.Label>
                <Form.Control type={"text"} onChange={event => setPassword(event.target.value)}></Form.Control>
            </FormGroup>

            <FormGroup>
                <Form.Label>First Name</Form.Label>
                <Form.Control type={"text"} onChange={event => setFirstname(event.target.value)}></Form.Control>
            </FormGroup>

            <FormGroup>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type={"text"} onChange={event => setLastname(event.target.value)}></Form.Control>
            </FormGroup> <br/>
            <Button variant={"success"}
                    type={"submit"}
                    disabled={isSigningUp}
                    >
                    {isSigningUp ? 'Signing up...' : 'Sign up here!'}
            </Button>
            <Container style={{position: "absolute", left: 1030, top: 385, fontWeight: "bold"}}>
                {signupMessage}
            </Container>

        </Form>
    </>)
}