let center = {
      display: 'flex',
      alignItems: 'center',
      flexFlow: 'column',
      borderRadius : '2px',
      backgroundColor: 'rgba(250,250,250,0.95)'
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
    }

Register = React.createClass({

   mixins: [LoggedInMixin],

  componentDidMount(){
      $(document).ready(function() {
        $('select').material_select();
      }),

      $(document).ready(function() {
        $('input#input_text, textarea#textarea1').characterCounter();
      })
  },

  invalidPassword() {
    let $password = $('#password'),
        $rePassword = $('#re-password')
    $password.removeClass('valid').addClass('invalid')
    $rePassword.removeClass('valid').addClass('invalid')
  },

  validPassword() {
    let $password = $('#password'),
        $rePassword = $('#re-password')
    $password.addClass('valid').removeClass('invalid')
    $rePassword.addClass('valid').removeClass('invalid')
  },

  _onClickSubmit() {      
      let businessName = $('#business-name').val(),
          businessType = $('#business-type').find(':selected').val(),
          ownerName = $('#owner-name').val(),
          email = $('#email').val(),
          password = $('#password').val().toString(),
          rePassword = $('#re-password').val().toString(),
          acceptTerm = $('#term-condition').prop('checked'),
          isPasswordEqual = password === rePassword

      if(isPasswordEqual){
        if(acceptTerm) {
            let newUser = {
              businessName,
              businessType
            }
            Accounts.createUser({
              email,
              password,
              username: ownerName,
              profile: newUser
            })
            Meteor.call('sendVerificationEmail')
        }
      }
      else{
        this.invalidPassword()
      }
  },

  _onChangePasswordInput() {
      let password = $('#password').val(),
          rePassword = $('#re-password').val(),
          isPasswordEqual = password === rePassword
      if(!isPasswordEqual){
        this.invalidPassword()
      }
      else{
        this.validPassword()
      }
  },

  render(){
    return(
        <div style={alignCenter} className="row">
          <div className="col l4">
            <br/>
          </div>
          <form style={center} className="col l4 z-depth-1">
            <div className="row">
              <div className="input-field col l12">
                <h3 style={colorText}>Register</h3>
              </div>
              <div className="input-field col l12">
                <input id="business-name" type="text" className="validate"/>
                <label htmlFor="business-name">Business name</label>
              </div>
              <div className="input-field col s12">
                <select id="business-type" defaultValue="0">
                  <option value="0" disabled>Business type</option>
                  <option value="Physical Therapy Clinic">Physical Therapy Clinic</option>
                </select>
              </div>
              <div className="input-field col l12">
                <input id="owner-name" type="text" className="validate"/>
                <label htmlFor="owner-name">Owner name</label>
              </div>
              <div className="input-field col l12">
                <input id="email" type="email" className="validate"/>
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col l12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  onChange={this._onChangePasswordInput}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field col l12">
                <input
                  id="re-password"
                  type="password"
                  className="validate"
                  onChange={this._onChangePasswordInput}
                />
                <label htmlFor="re-password">Re-Password</label>
              </div>
              <div className="input-field col l12">
                <p>
                  <input type="checkbox" id="term-condition"/>
                  <label htmlFor="term-condition">Accept Term And Condition</label>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="input-field col l6">
                <a href="/" className="waves-effect waves-light btn">Back</a>
              </div>
              <div className="input-field col l6">
                <a
                  className="waves-effect waves-light btn"
                  onClick={this._onClickSubmit}
                >Submit</a>
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
