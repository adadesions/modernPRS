let sizeTextbox = {
      width: '15em',
      marginLeft: '1em',
      borderRadius: '2px',
      color: '#0288d1',
      display: 'flex',
      alignItems: 'center',
      flexFlow: 'row',
      height: '3.2em',
      paddingRight: '2em',
      border: '1px solid #0288d1'
    },
    labelColor = {
      color: '#0288d1',
      fontWeight: 'bold',
      fontFamily: 'Quark-LightBold , verdana, helvetica, sans-serif',
      paddingLeft: '2em'
    },
    inputPosition = {
      marginTop: '0.8em',
      marginLeft: '1em',
    }

FormToolsBar = React.createClass({
  onClickSave() {
    let firstname = $('#firstname').val(),
        lastname = $('#lastname').val(),
        bod = $('#bod').val(),
        gender = $('#gender').find(':selected').val(),
        idCard = $('#idCard').val(),
        occupation = $('#occupation').val(),
        age = $('#age').val(),
        emergencyCall = $('#emergencyCall').val(),
        tel = $('#tel').val(),
        address = $('#address').val(),
        chiefComplaint = $('#chiefComplaint').val(),
        contraindication = $('#precautionAndContraindication').val(),
        diagnosis = $('#diagnosis').val(),
        arom = $('[name=arom-input]').val(),
        prom = $('[name=prom-input]').val(),
        typeOfPain = $('#typeOfPain').find(':selected').val(),
        duration = $('#input-range').val(),
        agg = $('#agg').val(),
        rest = $('#rest').val(),
        painLocation = $('#painLocation').val(),
        assessment = $('#assessment').val(),
        treatment = $('#treatment').val(),
        note = $('#note').val(),
        patient = new Patient()

    patient.set({
        information: {
          firstname,
          lastname,
          bod,
          age,
          gender,
          emergencyCall,
          idCard,
          occupation,
          address
        },
        interview: {
          chiefComplaint,
          contraindication,
          diagnosis
        },
        painSection: {
          arom,
          prom,
          typeOfPain,
          duration,
          agg,
          rest,
          painLocation,
        },
        assessment,
        treatment,
        note,
        createdAt: new Date(),
        modifiedAt: new Date()
    })
    patient.save()
  },

  render(){
    return(
      <div className="nav-prs">
        <div className="section">
          <div className="container">
            <nav id="nav" className="nav">
              <ul className="clinic-number">
                <li>
                  <div style={sizeTextbox} className="input-field">
                    <input style={inputPosition} id="cn" type="text" defaultValue="59-000001" className="validate"/>
                    <label style={labelColor} htmlFor="cn">CN</label>
                  </div>
                </li>
              </ul>
              <ul className="navbar">
                <li>
                    <a
                      id="save-btn"
                      className="waves-effect waves-light btn green accent-4"
                      onClick={this.onClickSave}
                    >
                    Save
                    </a>
                </li>
                <li>
                    <a
                      id="cancle-btn"
                      className="waves-effect waves-light btn red accent-4"
                    >
                      Cancle
                    </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
})
