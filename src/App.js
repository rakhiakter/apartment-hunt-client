
import './App.scss';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookingList from './Components/BookingList/BookingList';
import Login from './Components/Login/Login';
import MyRent from './Components/MyRent/MyRent';
import RentHouse from './Components/RentHouse/RentHouse';
import ApartmentDetails from './Components/ApartmentDetails/ApartmentDetails';
import CreateAccount from './Components/CreateAccount/CreateAccount';

function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/apartmentDetails" component={ApartmentDetails} />
          <Route path="/bookingList" component={BookingList} />
          <Route path="/myRent" component={MyRent} />
          <Route path="/rentHouse" component={RentHouse} />
          <Route path="/createAccount" component={CreateAccount} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
