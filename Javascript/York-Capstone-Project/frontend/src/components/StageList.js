import {useDispatch, useSelector} from "react-redux";
import {ListGroup} from "react-bootstrap";
import {SHOW_STAGES} from "../modules/Reducer";
import './StageList.css'



export default () => {
    const dispatch = useDispatch();
    let stages = useSelector(s => s.stages);

    function onClick(id) {
        dispatch({type: SHOW_STAGES, data: id})
    }

    return (
        <ListGroup style={{cursor: "pointer"}}>
            {
                stages.map((stage, idx)=>{
                    return (
                        <ListGroup.Item key={idx} id={"listitem"} onClick={event => onClick(stage.id)}>
                            <p>{stage.title}</p>
                        </ListGroup.Item>);
                })
            }
        </ListGroup>
    );
}