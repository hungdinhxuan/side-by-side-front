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
import Page404 from "./Pages/Error/Page404";
import ChatOnline from "./Pages/ChatOnline";
import Update from "./Components/Update/index";
import ChatClient from "./Pages/ChatClient";
import Newsfeed from "./Pages/Newsfeed";
import Dashboard from "./Components/AdminApp/Dashboard";
import Chart from "./Components/AdminApp/Chart";
import AdminRoute from "./Auth/AdminRoute";
import { Redirect } from "react-router-dom";

// import AdminApp from "./Components/AdminApp";

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
          <Route path="/admin">
            <Redirect exact to="/admin" to="/admin/dashboard" />
            <Route
              path="/admin/dashboard"
              render={(props) => <Dashboard {...props} route="dashboard" />}
            />
            <Route
              path="/admin/usermanagement"
              render={(props) => (
                <Dashboard {...props} route="usermanagement" />
              )}
            />
          </Route>
          <AppLayout>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/streamhub">
              <Update />
            </Route>

            <Route path="/newsfeed">
              <Newsfeed />
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
              <Update />
            </Route>
            <Route
              path="/setting-streamer-profile"
              component={SettingStreamer}
            />
            <Route path="/room/:id">
              <ChatClient />
            </Route>
            <Switch>
              <Route path="/wallet" component={Wallet} exact />
              <Route path="/wallet/payment">
                <Napthe />
              </Route>
            </Switch>
          </AppLayout>
          {/* {/* <Route path="/streamer">
//             <Streamer />
//           </Route> */}
        </Switch>
      </BrowserRouter>
    </socketContext.Provider>
  );
}

// {/* <Route path="/streamer">
//             <Streamer />
//           </Route> */}
//           {/* <Route
//             path="/admin/dashboard"
//             render={(props) => <Dashboard {...props} route="dashboard" />}
//           />
//           <Route
//             path="/admin/usermanagement"
//             render={(props) => <Dashboard {...props} route="usermanagement" />}
//           />

export default App;
