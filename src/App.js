import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile.js";
import {BrowserRouter, Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={'AppWrapper'}>
                <Header/>
                <Navbar/>
                <div className={'contentWrapper'}>
                    <Route path={'/messages'} render={() => <Messages dialogsData={props.state.dialogsPage}/>}/>
                    <Route path={'/profile'} render={() => <Profile store={props.store} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
