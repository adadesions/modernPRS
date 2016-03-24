PatientDetialRight = React.createClass({

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
