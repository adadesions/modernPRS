PatientName = React.createClass({

  componentDidMount(){

    $('#name').focus(function(){
      $('.patient-name-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-name-box').removeClass('box-key-press')
    }),

    $('#last_name').focus(function(){
      $('.patient-name-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-name-box').removeClass('box-key-press')
    })

  },

  render(){
    return(
      <div className="row">
        <div className="input-field">
          <input id="name" type="text" className="validate"/>
          <label htmlhtmlFor="name">Name</label>
        </div>
        <div className="input-field">
          <input id="last_name" type="text" className="validate"/>
          <label htmlhtmlFor="last_name">Last Name</label>
        </div>
      </div>
    )
  }
})
