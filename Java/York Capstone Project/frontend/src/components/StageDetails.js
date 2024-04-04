import {useDispatch, useSelector} from "react-redux";
import {Button, ButtonGroup, Form, Modal} from "react-bootstrap";
import {CLEAR_SELECTION} from "../modules/Reducer";
import {editStage, deleteStage} from '../modules/requests'
import {useState} from "react";
import './CreateStage.css';



export default () => {
    let stage = useSelector(state => state.selection);
    let token = useSelector(state => state.token);
    let [editing, setEditing] = useState(false);
    let [title, setTitle] = useState(stage? stage.title : "")
    let [description, setDescription] = useState(stage? stage.description : "")
    const dispatch = useDispatch();

    function onSubmit() {
        dispatch(editStage(title, description))
        onClose();
    }

    function onDelete() {
        dispatch(deleteStage())
        onClose()
    }

    function onClose() {
        setEditing(false);
        setTitle('');
        setDescription('');
        dispatch({type: CLEAR_SELECTION})
    }
    return (

        <Modal size={"lg"} show={!!stage}>

            <Modal.Header style={{fontWeight: "bold"}}> {
                editing ?
                    <Form.Control
                        placeholder={stage?.title}
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    ></Form.Control> :
                    stage?.title
            } </Modal.Header>
            <Modal.Body> {
                editing ?
                    <Form.Control as={"textarea"}
                                  id={"description"}
                                  placeholder={stage?.description}
                                  value={description}
                                  onChange={event => setDescription(event.target.value)}
                    ></Form.Control> :
                    <pre id={"description"}>{stage?.description}</pre>
            } </Modal.Body>
            <Modal.Footer>
                <ButtonGroup>
                    {editing ?
                        <Button onClick={() => onSubmit()}> Submit </Button> :
                        <Button type={"button"} onClick={event => setEditing(true)} disabled={!token}> Edit </Button>}
                    <Button variant={"danger"} onClick={()=> onDelete()} disabled={!token}> Delete </Button>
                    <Button onClick={event => onClose()}> Close </Button>
                </ButtonGroup>
                <Button type={"button"} variant={"warning"} style={{position: "absolute", left: 10}} disabled={!token}> Post Comment </Button>
            </Modal.Footer>
        </Modal>
    );
}