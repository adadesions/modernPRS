let scroll = {
      height: '3em'
    },
    scrollInterview = {
      overflowY: 'auto',
      height: '92vh',
      padding: '2em'
    }
ProgressionNote = React.createClass({

  render(){
    return(
      <div id="style-1" style={scrollInterview} className="row patient-progression-note-box">
        <div className="input-field col s12">
          <textarea style={scroll} id="subject" className="materialize-textarea"></textarea>
          <label htmlhtmlFor="subject">Subject</label>
        </div>
        <div className="input-field col s12">
          <textarea style={scroll} id="object" className="materialize-textarea"></textarea>
          <label htmlhtmlFor="object">Object</label>
        </div>
        <div className="input-field col s12">
          <textarea style={scroll} id="analysis" className="materialize-textarea"></textarea>
          <label htmlhtmlFor="analysis">Analysis</label>
        </div>
        <div className="input-field col s12">
          <textarea style={scroll} id="plan" className="materialize-textarea"></textarea>
          <label htmlhtmlFor="plan">Plan</label>
        </div>
      </div>
    )
  }
})
