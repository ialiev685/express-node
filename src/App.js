import { Container } from "./components/Container/Container.jsx";
import { Navigation } from "./components/Navigation/Navigation.jsx";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./views/HomePage.jsx";
import { ProductPage } from "./views/ProductPage.jsx";
import { ItemProductPage } from "./views/ItemProductPage.jsx";

import "./App.scss";

function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/product">
          <ProductPage />
        </Route>

        <Route path="/product/:id">
          <ItemProductPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
