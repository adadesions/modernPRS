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
                <select defaultValue="0">
                  <option value="0" disabled>Business type</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
              <div className="input-field col l12">
                <input id="owner-name" type="text" className="validate"/>
                <label htmlFor="owner-name">Owner name</label>
              </div>
              <div className="input-field col l12">
                <input id="email" type="text" className="validate"/>
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col l12">
                <input id="password" type="text" className="validate"/>
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field col l12">
                <input id="re-password" type="text" className="validate"/>
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
                <a className="waves-effect waves-light btn">Submit</a>
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
