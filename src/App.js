
import './App.scss';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookingList from './Components/BookingList/BookingList';
import Login from './Components/Login/Login';
import MyRent from './Components/MyRent/MyRent';
import RentHouse from './Components/RentHouse/RentHouse';
import ApartmentDetails from './Components/ApartmentDetails/ApartmentDetails';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/apartmentDetails" component={ApartmentDetails} />
          <PrivateRoute path="/bookingList">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/myRent">
            <MyRent></MyRent>
          </PrivateRoute>
          <PrivateRoute path="/addHouse">
            <RentHouse></RentHouse>
          </PrivateRoute>
          <Route path="/createAccount" component={CreateAccount} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
