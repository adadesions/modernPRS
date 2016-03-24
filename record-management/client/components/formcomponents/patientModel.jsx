let center = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'column'
    },
    sizeImage = {
      width: '10em',
      height: 'auto'
    }

PatientModel = React.createClass({

  render(){
    return(
      <div style={center} className="col l12">
        <div className="row">
          <div className="col l6">
            <img style={sizeImage} src="/images/human.png"/>
          </div>
          <div className="col l6">
            <img style={sizeImage} src="/images/human.png"/>
          </div>
        </div>
        <div className="row">
          <div className="col l6">
            <img style={sizeImage} src="/images/human.png"/>
          </div>
          <div className="col l6">
            <img style={sizeImage} src="/images/human.png"/>
          </div>
        </div>
      </div>
    )
  }
})
