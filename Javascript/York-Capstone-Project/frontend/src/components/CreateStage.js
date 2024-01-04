import {Button, Container, Form, FormGroup} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {createStage} from "../modules/requests";
import './CreateStage.css';


export default () => {
    const dispatch = useDispatch();
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');

    function onSubmit(event) {
        event.preventDefault();
        dispatch(createStage(title, description));
    }

    return (<>
    <Form onSubmit={onSubmit}>
        <FormGroup>
            <Form.Label style={{position: "relative", left: 5}}> Title </Form.Label>
            <Form.Control type={"text"} onChange={event => setTitle(event.target.value)}></Form.Control>
        </FormGroup>

        <FormGroup>
            <Form.Label style={{position: "relative", left: 5}}> Description </Form.Label>
            <Form.Control as={"textarea"}
                          style={{lineHeight: 2}}
                          id={"description"}
                          onChange={event => setDescription(event.target.value)}>
            </Form.Control>
        </FormGroup>
        <Container style={{position: "relative", left: -10}}>
            What type of thread would you like to create?
        </Container>

        <br/>
        <FormGroup>
            <Form.Check label={"True/False Survey"} type={"switch"} style={{position: "absolute", left: 265, top: 255}}></Form.Check>
            <Form.Check label={"Multiple Choice Survey"} type={"switch"} style={{position: "absolute", left: 265, top: 275}}></Form.Check>
            <Form.Check label={"Text Response"} type={"switch"} style={{position: "absolute", left: 265, top: 295}}></Form.Check>
        </FormGroup>
        <br/>
        <Button type={"submit"} style={{position: "absolute", left: 265, top: 325}}>Submit</Button>
        <br/> <br/>


    </Form>
    </>)
}