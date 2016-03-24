PatientDetialLeft = React.createClass({

  componentDidMount(){
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 100 // Creates a dropdown of 15 years to control year
    })
  },

  render(){
    return(
      <div className="row">
        <div className="input-field">
          <input id="bod" type="date" className="datepicker"/>
          <label htmlFor="bod">BOD</label>
        </div>
        <div className="input-field">
          <input id="gender" type="text" className="validate"/>
          <label htmlFor="gender">Gender</label>
        </div>
        <div className="input-field">
          <input id="idCard" type="text" className="validate"/>
          <label htmlFor="idCard">ID Card</label>
        </div>
        <div className="input-field">
          <input id="occupation" type="text" className="validate"/>
          <label htmlFor="occupation">Occupation</label>
        </div>
      </div>
    )
  }
})