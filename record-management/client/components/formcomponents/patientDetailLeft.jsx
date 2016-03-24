PatientDetialLeft = React.createClass({

  componentDidMount(){
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 100 // Creates a dropdown of 15 years to control year
    }),

    $('#bod').focus(function(){
      $('.patient-detail-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-detail-box').removeClass('box-key-press')
    }),

    $('#gender').focus(function(){
      $('.patient-detail-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-detail-box').removeClass('box-key-press')
    }),

    $('#idCard').focus(function(){
      $('.patient-detail-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-detail-box').removeClass('box-key-press')
    }),

    $('#occupation').focus(function(){
      $('.patient-detail-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-detail-box').removeClass('box-key-press')
    })
  },

  render(){
    return(
      <div className="row">
        <div className="input-field">
          <input id="bod" type="date" className="datepicker"/>
          <label htmlhtmlFor="bod">BOD</label>
        </div>
        <div className="input-field">
          <input id="gender" type="text" className="validate"/>
          <label htmlhtmlFor="gender">Gender</label>
        </div>
        <div className="input-field">
          <input id="idCard" type="text" className="validate"/>
          <label htmlhtmlFor="idCard">ID Card</label>
        </div>
        <div className="input-field">
          <input id="occupation" type="text" className="validate"/>
          <label htmlhtmlFor="occupation">Occupation</label>
        </div>
      </div>
    )
  }
})
