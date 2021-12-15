import React from "react";
import UserRegistrationForm from "./components/users/userRegistrationForm"
import UserLoginForm from "./components/users/userLoginForm"
import Dashboard from "./components/homepage/dashboard"
import CreateGroupForm from "./components/users/createGroupForm";
import Homepage from "./components/homepage/homepage";
import Instructions from "./components/homepage/instructions";
import Contact from "./components/homepage/contact";
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={UserRegistrationForm} />
          <Route path="/login" component={UserLoginForm} />
          <Route path="/createGroup" component={CreateGroupForm} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/instructions" component={Instructions} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;