PatientName = React.createClass({

  render(){
    return(
      <div className="row">
        <div className="input-field">
          <input id="name" type="text" className="validate"/>
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field">
          <input id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">Last Name</label>
        </div>
      </div>
    )
  }
})
