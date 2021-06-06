import React from 'react'
//import axios from 'axios'
import { Provider } from 'react-redux'
import Home from './components/Home/home'
import HistoryShop from './components/Home/historyShop'
import AboutShop from './components/Home/aboutShop'
import StatusShop from './components/Home/statusShop'
import ShowProducts from './components/Products/showProducts'
import store from './redux/productStore'
import Menu from './components/menu'
//import CardProduct from './components/Products/cardProduct' //into show...
//import Payment from './components/Products/payment' //into show
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import photo_home from './images/photo_home.jpg'

function App() {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>

      <Provider store={store}>
        {/* <Provider>  */}
        <div className="App">

          <Router>
            <Menu />
            <Switch>
              <Route path="/home">
                <Home>
                    <HistoryShop />
                    <AboutShop />
                    <StatusShop />
                </Home>
              </Route>
              <Route path="/showProducts">
                <ShowProducts />
              </Route>
            </Switch>
          </Router>
        </div>
      </Provider>
    </>
  );
}

export default App;
