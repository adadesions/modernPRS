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

Register = React.createClass({

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
        <form style={center} className="col l4">
          <div className="row">
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
          </div>
          <div className="row">
            <div style={floatRight} className="input-field col l12">
              <p>
                <input type="checkbox" id="term-condition"/>
                <label htmlFor="term-condition">Accept Term And Condition</label>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="input-field col l6">
              <a className="waves-effect waves-light btn">Close</a>
            </div>
            <div className="input-field col l6">
              <a className="waves-effect waves-light btn">Login</a>
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
