PatientName = React.createClass({

  render(){
    return(
      <div className="row">
        <div className="input-field">
          <input id="name" type="text" className="validate"/>
          <label for="name">Name</label>
        </div>
        <div className="input-field">
          <input id="last_name" type="text" className="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>
    )
  }
})
