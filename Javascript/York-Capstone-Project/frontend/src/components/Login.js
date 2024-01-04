import {Button, Form, FormGroup} from "react-bootstrap";
import {login} from "../modules/requests";
import {useState} from "react";
import {useDispatch} from "react-redux";

export default () => {

    let dispatch = useDispatch();
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    function onSubmit(event) {
        event.preventDefault();
        dispatch(login(username, password))
    }

    return (<>
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Form.Label>Username</Form.Label>
                <Form.Control type={"text"}
                              placeholder={"username"}
                              onChange={event => setUsername(event.target.value)}>
                </Form.Control>
            </FormGroup>

            <FormGroup>
                <Form.Label>Password</Form.Label>
                <Form.Control type={"password"}
                              placeholder={"password"}
                              onChange={event => setPassword(event.target.value)}>
                </Form.Control>
            </FormGroup> <br/>
            <Button type={"submit"}>Login</Button>
        </Form>
    </>);
}