import Header from "./component/Header";
import routes from "./routes";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {

  const maproutes = routes.map((route, index) => {
    return (
      <Route key={index}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    );
  });
  return (
    <Router>
    <div className="App">
      <div className="">
      <Header />
      <Switch>{maproutes}</Switch>
      <br></br>
    
      <Footer/>
      </div>
    </div>
    </Router>
  );
}

export default App;
