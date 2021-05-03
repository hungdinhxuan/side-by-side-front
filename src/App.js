import "./Styles";
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

//Pages
import AppLayout from "./Components/LayoutApp";
import Home from "./Pages/Home";

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
          </AppLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
