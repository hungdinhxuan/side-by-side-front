import "./Styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Pages
import AppLayout from "./Components/LayoutApp";
import Home from "./Pages/Home";
import Streamer from "./Pages/Streamer";
import Setting from "./Pages/Setting";
import BackToTop from "./Hooks/BackToTop";
import BXH from "./Pages/BXH/index";
import { getCookie } from "./Services/handleCookie";
import { useEffect, useState } from "react";
import DetailStreamer from "./Pages/Streamer/DetailStreamer";
import SettingStreamer from "./Pages/Streamer/SettingStreamer";
import CountdownTime from "./Components/CountdownTime";
import Wallet from "./Pages/Wallet";
import Napthe from "./Pages/Wallet/Napthe";
import { socketContext, socketio } from "./Components/socket";

function App(props) {
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (getCookie("token")) {
      setToken(true);
    }
  }, [token]);

  return (
    <socketContext.Provider value={socketio}>
      <BrowserRouter>
        {/* Route Main */}
        <Switch>
          <Route>
            <AppLayout>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/streamer">
                <Streamer />
              </Route>
              <Route path="/detail/:id" component={DetailStreamer} />
              <Route
                path="/setting/general"
                render={(props) => <Setting {...props} route="general" />}
              />
              <Route
                path="/setting/wallet"
                render={(props) => <Setting {...props} route="wallet" />}
              />
              <Route
                path="/setting/security"
                render={(props) => <Setting {...props} route="security" />}
              />
              <Route
                path="/setting/blocklist"
                render={(props) => <Setting {...props} route="blocklist" />}
              />
              <Route path="/BXH">
                <BXH />
              </Route>
              <Route
                path="/setting-streamer-profile"
                component={SettingStreamer}
              />
              <Switch>
                <Route path="/wallet" component={Wallet} exact />
                <Route path="/wallet/payment">
                  <Napthe />
                </Route>
              </Switch>
            </AppLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </socketContext.Provider>
  );
}

export default App;
