let scroll = {
  height: '3em'
}

let scrollInterview = {
  overflowY: 'auto',
  height: '92vh'
}

PatientInterview = React.createClass({

  componentDidMount(){

    $('#address').focus(function(){
      $('.patient-interview-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-interview-box').removeClass('box-key-press')
    }),

    $('#chiefComplaint').focus(function(){
      $('.patient-interview-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-interview-box').removeClass('box-key-press')
    }),

    $('#precautionAndContraindication').focus(function(){
      $('.patient-interview-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-interview-box').removeClass('box-key-press')
    }),

    $('#diagnosis').focus(function(){
      $('.patient-interview-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-interview-box').removeClass('box-key-press')
    })

  },

  render(){
    return(
      <div id="style-1" style={scrollInterview} className="row patient-interview-box">
        <div className="input-field col s12">
          <textarea style={scroll} id="address" className="materialize-textarea"></textarea>
          <label htmlFor="address">Address</label>
        </div>
        <div className="input-field col s12">
          <textarea style={scroll} id="chiefComplaint" className="materialize-textarea"></textarea>
          <label htmlFor="chiefComplaint">Chief Complaint</label>
        </div>
        <div className="input-field col s12">
          <textarea style={scroll} id="precautionAndContraindication" className="materialize-textarea"></textarea>
          <label for="precautionAndContraindication">Contraindication/Precaution</label>
        </div>
        <div className="input-field col s12">
          <textarea style={scroll} id="diagnosis" className="materialize-textarea"></textarea>
          <label htmlFor="diagnosis">Diagnosis</label>
        </div>
      </div>
    )
  }
})
