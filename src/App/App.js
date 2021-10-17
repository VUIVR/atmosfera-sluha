import './App.css';
import Header from './Header/header'
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './MainPage';
import AboutCompany from './MainPage';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path='/MainPage' component={MainPage} />
        <Route path='/AboutCompany' component={AboutCompany} />
        {/* <Route path='/Servises' component={Servises} /> */}
        {/* <Route path='/Products' component={Products} /> */}
        {/* <Route path='/Contacts' component={Contacts} /> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
