const Header = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src="/static/password.svg" alt="shift icon" height="50"/>
          <div className="navbar-item">
            <h2 className="has-text-white is-size-3">Password Maker Upper</h2>
          </div>

          <div className="navbar-item">
            <h2 className="has-text-white">Over 12 trillion unique and memorable passwords</h2>
          </div>
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a href="http://codypotter.com" className="button is-danger">
              <strong>made by Cody Potter</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Header;