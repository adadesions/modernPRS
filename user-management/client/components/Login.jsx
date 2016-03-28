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
  login() {
      let username = $('#username').val(),
          password = $('#password').val()
      Meteor.loginWithPassword(username, password, function () {
        if(Meteor.loggingIn()){
          FlowRouter.go('/physicalform')
        }
      })
  },
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
                <label htmlFor="username">Username</label>
              </div>
              <div className="input-field col l12">
                <input id="password" type="text" className="validate"/>
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div style={floatRight} className="input-field col l12">
                <a>Forget Password</a>
              </div>
            </div>
            <div className="row">
              <div className="input-field col l6">
                <a
                  className="waves-effect waves-light btn"
                  onClick={this.login}
                >Login</a>
              </div>
              <div className="input-field col l6">
                <a href="/register" className="waves-effect waves-light btn">Register</a>
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
