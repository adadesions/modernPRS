let scroll = {
  height: '8em'
}

let scrollTreatment = {
  overflowY: 'auto',
  height: '95vh',
  display: 'flex',
  justifyContent: 'center'
}

let container = {
  width: '90%'
}
Treatment = React.createClass({

  render(){
    return(
      <div id="style-1" style={scrollTreatment} className="row">
        <div style={container}>
          <div className="input-field col s12">
            <textarea style={scroll} id="treatment" className="materialize-textarea"></textarea>
            <label htmlFor="treatment">Treatment</label>
          </div>
          <div className="input-field col s12">
            <textarea style={scroll} id="note" className="materialize-textarea"></textarea>
            <label htmlFor="note">Note</label>
          </div>
        </div>
      </div>
    )
  }
})
