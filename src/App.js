import "./App.css";
import LoginPage from "./containers/Login/LoginPage";
import { Switch, Route } from "react-router-dom";
import UserListPage from "./containers/User/UserListPage"

const App =(props) => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/list"  component={UserListPage} />
      </Switch>
    </div>
  );
}

export default App;
