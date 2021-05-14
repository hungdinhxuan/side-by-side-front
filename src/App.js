import "./Styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Pages
import AppLayout from "./Components/LayoutApp";
import Home from "./Pages/Home";
import Streamer from './Pages/Streamer'
import BackToTop from "./Hooks/BackToTop";


function App(props) {
  
  return (
    <BrowserRouter>
      {/* Route Main */}
      <Switch>
        <Route path="/">
          <AppLayout>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/streamer">
              <Streamer />
              <BackToTop/>
            </Route>
          </AppLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
