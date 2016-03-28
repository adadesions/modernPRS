let navBox = {
      width: '83.2%',
      marginLeft: '16em'
    },
    flowRow = {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-between'
    },
    dropdownBox = {
      display: 'flex',
      flexFlow: 'row'
    },
    widthList = {
      width: '19.8em !important',
      marginLeft: '0'
    },
    bgColorSearch = {
      backgroundColor: '#fff',
      width: '85em'
    },
    sortByBox = {
      paddingLeft: '1em',
      paddingRight: '1em'
    },
    textColor = {
      color: '#444'
    },
    textSize = {
      fontSize: '20px'
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
                  <form>
                    <div className="input-field">
                      <input id="search" type="search" required/>
                      <label htmlFor="search"><i className="material-icons">search</i></label>
                      <i className="material-icons">close</i>
                    </div>
                  </form>
                </div>
              </nav>
              <div style={sortByBox} className="input-field">
                <a style={dropdownBox} className="dropdown-button" href="#!" data-activates="dropdown1"><h5 style={textSize}>Sort by</h5><i className="material-icons right">arrow_drop_down</i></a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
  }
})
