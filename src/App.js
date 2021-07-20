import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { Switch,Route,Link,Redirect } from 'react-router-dom';
import { useEffect } from "react";


function App() {
 
  return (
    // style={{ minHeight: '100vh',minWidth:'100vw' }}
    <div className="App"  >
        <Switch>
        <Route
                exact
                path="/"
                render={() => {
                    return (
                     <Redirect  to='/login'></Redirect>
                    )
                }}
              />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="*">
        
          </Route>
        </Switch>
    </div>
  );
}

export default App;
