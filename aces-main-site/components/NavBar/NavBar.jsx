import React, { Component } from "react";









class NavBar extends Component {
  state = {
    click: true,
  };

  handleMenu = () => {
    this.setState({ click: !this.state.click });
  };

  closeMenu = (page_num) => {
    this.setState({ click: true});
  };


  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <a className="navbar-logo" to="/" onClick={()=>this.closeMenu(1)}>
              <img src="./img/logo.png" alt=""/>
            </a>
            <div className="menu-icon" onClick={this.handleMenu}>
              <label for="" className="menu-btn">

              <i
                className={this.state.click ? "fas fa-bars" : "fas fa-times"}
              >
              </i>

              </label>
              


            </div>
            <ul className={!this.state.click ? "nav-menu active" : "nav-menu"}>


              <li className="nav-item">
                <a
                  href="/"
                  className={
                    this.props.page_no == 1
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  onClick={() => this.closeMenu(1)}
                >
                  HOME
                </a>
              </li>


              <li className="nav-item">
                <a
                  href="/latest"
                  className={
                    this.props.page_no == 2
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  onClick={() => this.closeMenu(2)}
                >
                  LATEST
                </a>
              </li>


              <li className="nav-item">
                <a
                  href="/blog"
                  className={
                    this.props.page_no == 3
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  onClick={() => this.closeMenu(3)}
                >
                  BLOG
                </a>
              </li>



              <li className="nav-item">
                <a
                  href="/teams"
                  className={
                    this.props.page_no == 4
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  onClick={() => this.closeMenu(4)}
                >
                  TEAMS
                </a>
              </li>

              

              



              <li className="nav-item">
                <a
                  href="https://projects.ce.pdn.ac.lk/"
		  target="_blank"
                  className="button"
                  onClick={() => this.closeMenu(4)}
                >
                  PROJECTS
                </a>
              </li>
            
              

             



            </ul>

           

           
          
          </div>

          

        </nav>
      </>
    );
  }
}
export default NavBar;
