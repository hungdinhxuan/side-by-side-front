import "./Styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Pages
import AppLayout from "./Components/LayoutApp";
import Home from "./Pages/Home";
import Streamer from './Pages/Streamer'

function App() {
  

  return (
    <BrowserRouter>
      {/* Route Main */}
      <Switch>
        <Route path="/">
          <AppLayout>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/streamer" exact>
              <Streamer />
            </Route>
          </AppLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
