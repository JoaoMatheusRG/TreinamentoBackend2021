import { CreateUser } from "./pages/createUser";
import { Login } from "./pages/login";
import { Tasks } from "./pages/tasks";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export function App(){
    return(
            <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/createuser" component={CreateUser} />
                    <Route path="/tasks" component={Tasks} />
                </Switch>
            </div>
        </Router>
    );
}