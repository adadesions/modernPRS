let center = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'column'
    },
    sizeImage = {
      width: '10em',
      height: 'auto'
    },
    sizeImageside = {
      width: 'auto',
      height: '23em'
    }

PatientModel = React.createClass({

  render(){
    return(
      <div style={center} className="col l12">
        <div className="row">
          <div className="col l6">
            <img style={sizeImage} src="/images/body-front.png"/>
          </div>
          <div className="col l6">
            <img style={sizeImage} src="/images/body-back.png"/>
          </div>
        </div>
        <div className="row">
          <div className="col l6">
            <img style={sizeImageside} src="/images/body-right.png"/>
          </div>
          <div className="col l6">
            <img style={sizeImageside} src="/images/body-left.png"/>
          </div>
        </div>
      </div>
    )
  }
})
