import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { CityInfoPage } from "./Pages/CityInfoPage/CityInfoPage";
import { FamousCityAttraction } from "./Pages/FamousCityAttraction/FamousCityAttraction";
import { CityAttractions } from "./Pages/CityAttractions/CityAttractions";
import { CityGallery } from "./Pages/CityGallery/CityGallery";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/CityInfo" component={CityInfoPage} />
        <Route path="/FamousAttraction" component={FamousCityAttraction} />
        <Route path="/CityAttractions/:id" component={CityAttractions} />
        <Route path="/CityGallery" component={CityGallery} />
        <Redirect from="/" to="/CityInfo" />
      </Switch>
    </div>
  );
}

export default App;
