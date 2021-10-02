import { Container } from "./components/Container/Container.jsx";
import { Navigation } from "./components/Navigation/Navigation.jsx";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./views/HomePage.jsx";
import { ProductPage } from "./views/ProductPage.jsx";
import { ItemProductPage } from "./views/ItemProductPage.jsx";
import { Form } from "./components/Form/Form.jsx";
import "./App.scss";

function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route exact path="/my-router">
          <HomePage />
        </Route>

        <Route exact path="/my-router/product">
          <ProductPage />
        </Route>

        <Route path="/my-router/product/:id">
          <ItemProductPage />
        </Route>

        <Route path="/my-router/callback">
          <Form />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
