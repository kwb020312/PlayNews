import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import Login from "./pages/Login";
import TabScreen from "./components/TabScreen";
import Register from "./pages/Register";

function Routes() {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="login" component={Login} title="Login" initial />
        <Scene key="newsList" component={TabScreen} title="News" />
        <Scene key="register" component={Register} title="Register" />
      </Stack>
    </Router>
  );
}

export default Routes;
