import './App.css';
import Header from '../Components/Header/header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../Components/MainPage';
import AboutCompany from '../Components/AboutCompany';
import Navbar from '../Components/Navbar';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/AboutCompany' component={AboutCompany} />
          {/* <Route path='/Servises' component={Servises} /> */}
          {/* <Route path='/Products' component={Products} /> */}
          {/* <Route path='/Contacts' component={Contacts} /> */}
        </Switch>
      </div>
    </BrowserRouter >

  );
}

export default App;
