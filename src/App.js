import { Container } from "./components/Container/Container.jsx";
import { Navigation } from "./components/Navigation/Navigation.jsx";
import { Switch, Route } from "react-router-dom";
import { HomeViews } from "./views/HomeViews.jsx";
import { ProductViews } from "./views/ProductViews.jsx";
import "./App.scss";

function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomeViews />
        </Route>

        <Route path="/product">
          <ProductViews />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
