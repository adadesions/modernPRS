let scroll = {
  height: '3em'
}

let scrollPain = {
  overflowY: 'auto',
  height: '95vh',
  display: 'flex',
  justifyContent: 'center'
}

let container = {
  width: '90%'
}
PainSectionInput = React.createClass({

  render(){
    return(
      <div id="style-1" style={scrollPain} className="row">
        <div style={container}>
          <div className="input-field">
            <input id="painScore" type="text" className="validate"/>
            <label htmlFor="painScore">Pain score</label>
          </div>
          <div className="input-field">
            <input id="typeOfPain" type="text" className="validate"/>
            <label htmlFor="typeOfPain">Type of pain</label>
          </div>
          <div className="input-field">
            <input id="duration" type="text" className="validate"/>
            <label htmlFor="duration">Duration</label>
          </div>
          <div className="input-field">
            <input id="agg" type="text" className="validate"/>
            <label htmlFor="agg">Agg</label>
          </div>
          <div className="input-field">
            <input id="rest" type="text" className="validate"/>
            <label htmlFor="rest">Rest</label>
          </div>
          <div className="input-field col s12">
            <textarea style={scroll} id="painLocation" className="materialize-textarea"></textarea>
            <label htmlFor="painLocation">Pain Location</label>
          </div>
          <div className="input-field col s12">
            <textarea style={scroll} id="presentAndPastHistory" className="materialize-textarea"></textarea>
            <label htmlFor="presentAndPastHistory">Present & Past History</label>
          </div>
          <div className="input-field col s12">
            <textarea style={scroll} id="assessment" className="materialize-textarea"></textarea>
            <label htmlFor="assessment">Assessment</label>
          </div>
        </div>
      </div>
    )
  }
})
