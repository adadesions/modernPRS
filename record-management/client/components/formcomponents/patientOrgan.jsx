let marginLeft = {
  marginRight: '0.5em'
}

PatientOrgan = React.createClass({
  render(){
    return(
      <div className="col l12">
        <div className="row">
          <div style={marginLeft} className="col l6">
            <img src="/images/organ.png"/>
          </div>
        </div>
      </div>
    )
  }
})
