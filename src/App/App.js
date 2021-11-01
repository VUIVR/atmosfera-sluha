import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Store/store'

import Header from '../Components/Header'
import Navbar from '../Components/Navbar';
import MainPage from '../Components/MainPage';
import AboutCompanyPage from '../Components/AboutCompany';
import Footer from '../Components/Footer';

import './App.css';



function App() {
  return (
    <Provider store={store}> {/* Подключение стора редакс */}
      <BrowserRouter>
        <div>
          <Header />
          <Navbar />
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/AboutCompany' component={AboutCompanyPage} />            
          </Switch>
         { <Footer />}
        </div>
      </BrowserRouter >
    </Provider >
  );
}

export default App;
