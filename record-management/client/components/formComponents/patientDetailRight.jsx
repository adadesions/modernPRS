PatientDetialRight = React.createClass({

  componentDidMount(){

    $('#age').focus(function(){
      $('.patient-detail-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-detail-box').removeClass('box-key-press')
    }),

    $('#emergencyCall').focus(function(){
      $('.patient-detail-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-detail-box').removeClass('box-key-press')
    }),

    $('#tel').focus(function(){
      $('.patient-detail-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-detail-box').removeClass('box-key-press')
    })

  },

  render(){
    return(
      <div className="row">
        <div className="input-field">
          <input id="age" type="text" className="validate"/>
          <label htmlFor="age">Age</label>
        </div>
        <div className="input-field">
          <input id="emergencyCall" type="text" className="validate"/>
          <label htmlFor="emergencyCall">Emergency call</label>
        </div>
        <div className="input-field">
          <input id="tel" type="text" className="validate"/>
          <label htmlFor="tel">Tel.</label>
        </div>
      </div>
    )
  }
})
