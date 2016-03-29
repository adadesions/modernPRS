let navBox = {
      width: '100%'
    },
    flowRow = {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-between'
    },
    dropdownBox = {
      display: 'flex',
      flexFlow: 'row',
      alignItems: 'center'
    },
    widthList = {
      width: '19.8em !important',
      marginLeft: '0'
    },
    bgColorSearch = {
      backgroundColor: '#fff',
      height: '4.5em'
    },
    sortByBox = {
      paddingLeft: '1em',
      paddingRight: '1em'
    },
    textColor = {
      color: '#444'
    },
    textSize = {
      fontSize: '18px',
      margin: '0'
    },
    arrowDropdown = {
      lineHeight: '57px'
    },
    inputSearch = {
      marginTop: '-0.1em'
    }

ToolsBarUserSite = React.createClass({
  componentDidMount(){
    $(".dropdown-button").dropdown()
  },
  render(){
    return(
      <div style={navBox} className="nav-user-side z-depth-1">
        <div className="section">
          <div className="container">
            <nav id="nav" className="nav">
              <ul style={widthList} id="dropdown1" className="dropdown-content">
                <li><a style={textColor} href="#!">one</a></li>
                <li><a style={textColor} href="#!">two</a></li>
                <li className="divider"></li>
                <li><a style={textColor} href="#!">three</a></li>
              </ul>
              <nav style={bgColorSearch} className="search-nav">
                <div className="nav-wrapper">
                  <form style={bgColorSearch}>
                    <div style={bgColorSearch} className="input-field">
                      <input style={inputSearch} id="search" type="search" required/>
                      <label style={inputSearch} htmlFor="search"><i style={inputSearch} className="material-icons">search</i></label>
                      <i style={inputSearch} className="material-icons">close</i>
                    </div>
                  </form>
                </div>
              </nav>
              <div style={sortByBox} className="input-field">
                <a style={dropdownBox} className="dropdown-button" href="#!" data-activates="dropdown1"><h5 style={textSize}>Sort by</h5><i style={arrowDropdown} className="material-icons right">arrow_drop_down</i></a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
  }
})
