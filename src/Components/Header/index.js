import { useDispatch, useSelector } from 'react-redux';

import ActionNumberActiveCity from '../../Store/ActionCreators/ACActiveCity';


import './header.css'
import logo from '../../SVG/logo'


function Header() {

  const dispatch = useDispatch()
  const adreses = useSelector(state => state.AllAdreses)
  const NumberActiveCity = useSelector(state => state.NumberActiveCity)


  //формирует список всех названий городов
  let listCities = adreses.map((elem, index) => {
    return <option key={index} value={index} >{elem.city}</option>
  })


  return (
    <header className="header" >
      <div className="logo">
        {logo('#31CBDC', '#1C8594')}
      </div>
      <div className="contacts">
        <div className="city">
          <label>Ваш город:</label>
          <select
            className="select-city"
            value={NumberActiveCity}
            onChange={(event) => dispatch(ActionNumberActiveCity(event.target.value))}>
            {listCities}
          </select>
        </div>
        <div className="street">{adreses[NumberActiveCity].street}</div>
        <div className="phone">{adreses[NumberActiveCity].phone}</div>
      </div>
    </header>
  )
}

export default Header