import ReactDOM from "react-dom";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import UserSearch1 from "./refs/UserSearch";

const App = () => {
    return <div>
        {/*<GuestList/>*/}
        {/*<UserSearch/>*/}
        {/*<EventComponent/>*/}
        <UserSearch1/>
    </div>
}

ReactDOM.render(<App/>, document.querySelector('#root'))
