let patientImgFrame = {
  width: '15em',
  height: '15em',
  display: 'flex',
  justifyContent: 'center'
}

let patientImg = {
  width: '13em',
  height: '13em'
}

PatiendImage = React.createClass({

  render(){
    return(
      <div style={patientImgFrame} className="patient-img">
        <img style={patientImg} className="responsive-img" src="/images/avatar.jpg"/>
      </div>
    )
  }
})
