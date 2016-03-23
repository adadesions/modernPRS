let scroll = {
  height: '3em'
}

let scrollInterview = {
  overflowY: 'auto',
  height: '90vh'
}

PatientInterview = React.createClass({

  render(){
    return(
      <div id="style-1" style={scrollInterview} className="row">
        <div className="input-field col s12">
          <textarea style={scroll} id="address" className="materialize-textarea"></textarea>
          <label for="address">Address</label>
        </div>
        <div className="input-field col s12">
          <textarea style={scroll} id="chiefComplaint" className="materialize-textarea"></textarea>
          <label for="chiefComplaint">Chief Complaint</label>
        </div>
        <div className="input-field col s12">
          <textarea style={scroll} id="precautionAndContraindication" className="materialize-textarea"></textarea>
          <label for="precautionAndContraindication">Precaution/Contraindication</label>
        </div>
        <div className="input-field col s12">
          <textarea style={scroll} id="diagnosis" className="materialize-textarea"></textarea>
          <label for="diagnosis">Diagnosis</label>
        </div>
      </div>
    )
  }
})
