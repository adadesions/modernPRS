let center = {
      display: 'flex',
      alignItems: 'center',
      flexFlow: 'column',
      border: '1px solid rgba(124,182,221,0.5)',
      borderRadius : '2px'
    },
    floatRight = {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%'
    },
    alignCenter = {
      display: 'flex',
      alignItems: 'center',
      height: '100vh'
    }

Login = React.createClass({

  render(){
    return(
      <div style={alignCenter} className="row">
        <div className="col l4">
          <br/>
        </div>
        <form style={center} className="col l4">
          <div className="row">
            <div className="input-field col l12">
              <input id="username" type="text" className="validate"/>
              <label for="username">Username</label>
            </div>
            <div className="input-field col l12">
              <input id="password" type="text" className="validate"/>
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div style={floatRight} className="input-field col l12">
              <a>Forget Password</a>
            </div>
          </div>
          <div className="row">
            <div className="input-field col l4">
              <a className="waves-effect waves-light btn">Close</a>
            </div>
            <div className="input-field col l4">
              <a className="waves-effect waves-light btn">Login</a>
            </div>
            <div className="input-field col l4">
              <a className="waves-effect waves-light btn">Register</a>
            </div>
          </div>
        </form>
        <div className="col l4">
          <br/>
        </div>
      </div>
    )
  }
})
