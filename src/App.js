import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import CommingSoon from "./Components/Comming Soon/CommingSoon";
import Contact from "./Components/Contact Us/Contact";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SingIn from "./Components/Registration/SingIn";
import SingUp from "./Components/Registration/SingUp";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/commingSoon">
            <CommingSoon></CommingSoon>
          </Route>
          <Route path="/singin">
            <SingIn></SingIn>
          </Route>
          <Route path="/singup">
            <SingUp></SingUp>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
