import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {logout} from "../modules/requests";

export default () => {
    const dispatch = useDispatch();

    return <>
        <Button variant={"danger"} onClick={event => {dispatch(logout())}}>Logout</Button>
    </>
}