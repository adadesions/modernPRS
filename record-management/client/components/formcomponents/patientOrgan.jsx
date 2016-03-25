let marginLeft = {
      marginRight: '0.5em'
    },
    imgSize = {
      height: '25em',
      width: 'auto'
    }

PatientOrgan = React.createClass({
  render(){
    return(
      <div className="col l12">
        <div className="row">
          <div style={marginLeft} className="col l6">
            <img style={imgSize} src="/images/organ.png"/>
          </div>
        </div>
      </div>
    )
  }
})
