import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path="/favourite">
          <FavouritesPage></FavouritesPage>
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage></NewMeetupPage>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
