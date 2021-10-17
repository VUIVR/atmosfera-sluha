import './adreses.json'
/* import './header.scss' */


function Header() {
  return (
    <header className="header" >
      <div className="logo">
        <div className="logo__logoIcon">logo</div>
        <div className="logo__name">name</div>
      </div>
      <div className="adress">
        <div className="city">city</div>
        <div className="street">street</div>
        <div className="phone">phone</div>
      </div>
    </header>
  )
}

export default Header