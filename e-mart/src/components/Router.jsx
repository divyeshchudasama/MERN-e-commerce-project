import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./home/Home";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";
import Details from "./details/Details";
import Cart from "./cart/Cart";
import PageNotFound from "./PageNotFound";

function Router() {
  return (
    <>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
      </Container>
    </>
  );
}

export default Router;
