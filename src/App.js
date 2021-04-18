import "./Styles";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

//Pages
import AppLayout from "./Components/LayoutApp";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      {/* Route Main */}
      <Route path="/">
        <AppLayout>
          <Route path="/" exact>
              <Home/>
          </Route>
        </AppLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
