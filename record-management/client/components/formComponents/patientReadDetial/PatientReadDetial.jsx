let controlBar = {
      backgroundColor: '#0098CF'
  },
  center = {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
  },
  colInterviewPatient = {
    padding: '2em',
    height: '90vh',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: '2px'
  },
  colDetailPatient = {
    padding: '2em',
    WebkitBoxShadow: '1px 0px 1px 0px rgba(124,182,221,0.5)',
    MozBoxShadow: '1px 0px 1px 0px rgba(124,182,221,0.5)',
    boxShadow: '1px 0px 1px 0px rgba(124,182,221,0.5)',
    borderRight: '1px solid rgba(124,182,221,0.5)',
    height: '90vh',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: '2px'
  },
  colPainSection = {
    padding: '2em',
    height: '170vh',
    backgroundColor: '#fff',
    borderRadius: '2px'
  },
  colModel = {
    padding: '2em',
    WebkitBoxShadow: '1px 0px 1px 0px rgba(124,182,221,0.5)',
    MozBoxShadow: '1px 0px 1px 0px rgba(124,182,221,0.5)',
    boxShadow: '1px 0px 1px 0px rgba(124,182,221,0.5)',
    borderRight: '1px solid rgba(124,182,221,0.5)',
    height: '160vh',
    backgroundColor: '#fff',
    borderRadius: '2px',
    display: 'flex',
    alignItem: 'center'
  },
  colAssessment = {
    padding: '2em',
    height: '80vh',
    backgroundColor: '#fff',
    borderRadius: '2px'
  },
  colOrgan = {
    padding: '2em',
    WebkitBoxShadow: '1px 0px 1px 0px rgba(124,182,221,0.5)',
    MozBoxShadow: '1px 0px 1px 0px rgba(124,182,221,0.5)',
    boxShadow: '1px 0px 1px 0px rgba(124,182,221,0.5)',
    borderRight: '1px solid rgba(124,182,221,0.5)',
    height: '80vh',
    backgroundColor: '#fff',
    borderRadius: '2px'
  },
  colProgressionNote = {
    paddingTop: '1em',
    paddingLeft: '2em',
    paddingRight: '2em',
    height: '90vh',
    backgroundColor: '#fff',
    borderRadius: '2px'
  },
  physicalFormBG = {
    backgroundColor: '#eeeeee',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  container = {
    width: '80%',
    zIndex: '+1000'
  },
  marginRow = {
    marginTop: '10em'
  },
  sizeImage = {
    width: '100%',
    height: '85%',
    position: 'absolute',
    left: '0',
    WebkitBoxShadow: '0px 0px 50px 0px rgba(0,0,0,0.8)',
    MozBoxShadow: '0px 0px 50px 0px rgba(0,0,0,0.8)',
    boxShadow: '0px 0px 50px 0px rgba(0,0,0,0.8)'
  },
  patientImgFrame = {
        width: '15em',
        height: '15em',
        display: 'flex',
        justifyContent: 'center'
  },
  patientImg = {
    width: '13em',
    height: '13em'
  },
  fontSize = {
    fontSize: '1rem',
    marginLeft: '0.8em',
    marginTop: '0.8em'
  },
  subfontSize = {
    fontSize: '1rem',
    marginLeft: '1.4em',
    marginTop: '0.8em'
  },
  sizeInput = {
    width: '20%',
    textAlign: 'center',
  },
  ratingImg = {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'spaceAround',
    marginLeft: '4em'
  },
  groupRating = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column',
    textAlign: 'center'
  },
  paddingImg = {
    padding: '0.3em',
    width: '2.5em',
    height: '2.5em'
  },
  borderBox = {
    padding:'1em',
    borderRadius: '2px',
    border: '1px solid rgba(124,182,221,0.5)'
  },
  scroll = {
        height: '3em'
  },
  scrollPain = {
    overflowY: 'auto',
    overflowX : 'hidden',
    height: '165vh',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '1em',
    paddingRight: '1em'
  },
  scrollTreatment = {
    overflowY: 'auto',
    height: '72vh',
    display: 'flex',
    justifyContent: 'center'
  }


PatientReadDetial = React.createClass({
  componentDidMount(){
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 100 // Creates a dropdown of 15 years to control year
    })
  },
  render(){
      return(
        <div style={physicalFormBG} className="patient-read-detial">
          <div className="coverPhysical">
            <img style={sizeImage} src="/images/cover/cover.jpg"/>
          </div>
          <div style={container}>
            <FormToolsBar />
            <div style={marginRow} className="row z-depth-1">
              <div style={colDetailPatient} className="col l6">
                <div className="row">
                  <div style={center} className="col l6">
                    <div style={patientImgFrame} className="patient-img">
                      <img style={patientImg} className="responsive-img" src="/images/avatar.jpg"/>
                    </div>
                  </div>
                  <div className="col l6 patient-name-box">
                    <div className="row">
                      <div className="input-field">
                        <input disabled disabled id="firstname" type="text" className="validate" value="Darunpob"/>
                        <label className="active" htmlFor="firstname">Firstname</label>
                      </div>
                      <div className="input-field">
                        <input disabled disabled id="lastname" type="text" className="validate" value="Prasutsangchant"/>
                        <label className="active" htmlFor="lastname">Lastname</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row patient-detail-box">
                  <div className="col l6">
                    <div className="row">
                      <div className="input-field">
                          <input disabled disabled id="bod" type="text" className="validate" value="8 september,1991"/>
                          <label className="active" htmlFor="bod">BOD</label>
                      </div>
                      <div className="input-field">
                        <input disabled disabled id="gender" type="text" className="validate" value="Male"/>
                        <label className="active" htmlFor="gender">Lastname</label>
                      </div>
                      <div className="input-field">
                        <input disabled id="idCard" type="text" className="validate" value="test"/>
                        <label className="active" htmlFor="idCard">ID Card</label>
                      </div>
                      <div className="input-field">
                        <input disabled id="occupation" type="text" className="validate" value="test"/>
                        <label className="active" htmlFor="occupation">Occupation</label>
                      </div>
                    </div>
                  </div>
                  <div className="col l6">
                    <div className="row">
                      <div className="input-field">
                        <input disabled id="age" type="text" className="validate" value="test"/>
                        <label className="active" htmlFor="age">Age</label>
                      </div>
                      <div className="input-field">
                        <input disabled id="emergencyCall" type="text" className="validate" value="test"/>
                        <label className="active" htmlFor="emergencyCall">Emergency call</label>
                      </div>
                      <div className="input-field">
                        <input disabled id="tel" type="text" className="validate" value="test"/>
                        <label className="active" htmlFor="tel">Tel.</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={colInterviewPatient} className="col l6">
                <div id="style-1" className="row patient-interview-box">
                  <div className="input-field col s12">
                    <textarea disabled id="address" className="materialize-textarea" value="test"></textarea>
                    <label className="active" htmlFor="address">Address</label>
                  </div>
                  <div className="input-field col s12">
                    <textarea disabled id="chiefComplaint" className="materialize-textarea" value="test"></textarea>
                    <label className="active" htmlFor="chiefComplaint">Chief Complaint</label>
                  </div>
                  <div className="input-field col s12">
                    <textarea disabled id="precautionAndContraindication" className="materialize-textarea" value="test"></textarea>
                    <label className="active" htmlFor="precautionAndContraindication">Contraindication/Precaution</label>
                  </div>
                  <div className="input-field col s12">
                    <textarea disabled id="diagnosis" className="materialize-textarea" value="test"></textarea>
                    <label className="active" htmlFor="diagnosis">Diagnosis</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row z-depth-1">
              <div style={colModel} className="col l6">
                <PatientModel />
              </div>
              <div style={colPainSection} className="col l6">
                <div id="style-1" style={scrollPain} className="row patient-pain-section-box">
                  <div style={container}>
                    <label className="active" style={fontSize}>Pain score</label>
                      <div>
                        <label className="active" name='arom-label' style={subfontSize}>AROM</label>
                        <RatingScale name='arom'/>
                      </div>
                      <div>
                        <label className="active" name='prom-label' style={subfontSize}>PROM</label>
                        <RatingScale name='prom'/>
                      </div>
                      <div className="input-field">
                        <input disabled id="typeOfPain" type="text" className="validate" value="test"/>
                        <label className="active" htmlFor="typeOfPain">Type Of Pain</label>
                      </div>
                    <label className="active" style={fontSize} htmlFor="duration">Duration</label>
                    <p className="range-field">
                      <input disabled type="range" id="duration" defaultValue="0" min="0" max="60" />
                      <input disabled style={sizeInput} type="text" id="input-range" defaultValue="0" className="validate"/>
                    </p>
                    <div className="input-field">
                      <input disabled id="agg" type="text" className="validate"/>
                      <label className="active" htmlFor="agg">Agg</label>
                    </div>
                    <div className="input-field">
                      <input disabled id="rest" type="text" className="validate"/>
                      <label className="active" htmlFor="rest">Rest</label>
                    </div>
                    <div className="input-field col s12">
                      <textarea disabled style={scroll} id="painLocation" className="materialize-textarea"></textarea>
                      <label className="active" htmlFor="painLocation">Pain Location</label>
                    </div>
                    <label className="active">Present & Past History</label>
                    <div style={borderBox} className="input-field col s12">
                      <PresentAndPastHistory />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row z-depth-1">
              <div style={colOrgan} className="col l6">
                <PatientOrgan />
              </div>
              <div style={colAssessment} className="col l6">
                <div id="style-1" style={scrollTreatment} className="row patient-treatment-box">
                  <div style={container}>
                    <div className="input-field col s12">
                      <textarea disabled style={scroll} id="assessment" className="materialize-textarea"></textarea>
                      <label className="active" htmlFor="assessment">Assessment</label>
                    </div>
                    <div className="input-field col s12">
                      <input disabled id="treatment" type="text" className="validate"/>
                      <label className="active">Treatment</label>
                    </div>
                    <div className="input-field col s12">
                      <textarea disabled style={scroll} id="note" className="materialize-textarea"></textarea>
                      <label className="active" htmlFor="note">Note</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={colProgressionNote} className="row z-depth-1">
              <ProgressionNote />
            </div>
          </div>
        </div>
      )
  }
})
