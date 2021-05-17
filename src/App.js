import "./Styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Pages
import AppLayout from "./Components/LayoutApp";
import Home from "./Pages/Home";
import Streamer from './Pages/Streamer'
import BackToTop from "./Hooks/BackToTop";
import { getCookie } from "./Services/handleCookie";
import { useEffect, useState } from "react";


function App(props) {
  
  const [token, setToken] = useState(false);

  useEffect(()=> {
    if(getCookie('token')){
      setToken(true);
    }
  },[token])


  return (
    <BrowserRouter>
      {/* Route Main */}
      <Switch>
        
        <Route path="/">
          <AppLayout>
            <Route path="/" exact >
              <Home />
            </Route>
            <Route path="/streamer" >
              <Streamer />
              {/* <BackToTop/> */}
            </Route>
          </AppLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
