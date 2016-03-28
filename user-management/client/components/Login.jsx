let center = {
      display: 'flex',
      alignItems: 'center',
      flexFlow: 'column',
      borderRadius : '2px',
      backgroundColor: 'rgba(250,250,250,0.95)'
    },
    sizeBotton = {
      width: '100%'
    },
    alignCenter = {
      display: 'flex',
      alignItems: 'center',
      height: '100vh',
      background: 'url("/images/cover/cover.jpg")',
      marginBottom: '0'
    },
    colorText = {
      color: '#009688',
      textShadow: '0px 1px 0px rgba(255,255,255,0.3), 0px -1px 0px rgba(0,0,0,0.3)'
    },
    justifyCenter = {
      display: 'flex',
      alignItems: 'center',
      justifyCenter: 'space-between',
      width: '100%'
    },
    floatRight = {
      display: 'flex',
      justifyContent: 'flex-end'
    }

Login = React.createClass({
  clickLogin() {
      let username = $('#username').val(),
          password = $('#password').val()
      Meteor.loginWithPassword(username, password, function () {
        if(Meteor.user()){
          FlowRouter.go('/physicalform')
        }
      })
  },
  render() {
    return(
      <div style={alignCenter} className="row">
        <div className="col l4">
          <br/>
        </div>
        <form style={center} className="col l4 z-depth-1">
          <div className="row">
            <div className="input-field col l12">
              <h1 style={colorText}>Login</h1>
            </div>
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col l12">
              <input id="username" type="text" className="validate"/>
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-field col l12">
              <input id="password" type="text" className="validate"/>
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div style={sizeBotton} className="row">
            <div className="input-field col l12">
              <a
                style={sizeBotton}
                className="waves-effect waves-light btn"
                onClick={this.clickLogin}
              >Login
              </a>
              </div>
            </div>
            <div style={justifyCenter} className="row">
                <div className="input-field col l6">
                  <a href="">Forget Password</a>
                </div>
                <div style={floatRight} className="input-field col l6">
                  <a href="/register">Register</a>
                </div>
            </div>
          </form>
+          <div className="col l4">
+            <br/>
           </div>
        </div>
      )
  }
})
