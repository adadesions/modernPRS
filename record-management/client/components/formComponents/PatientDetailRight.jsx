PatientDetialRight = React.createClass({
  onClickAge() {
      const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
      ]
      const monthToNumber = (month) => {
          return months.findIndex( (m,i) => {
              return month === m
          })
      }
      const findExectlyAge = (bod) => {
          let bodValue = bod,
              daynMonth = bodValue[0].split(' '),
              patientDay = daynMonth[0].trim(),
              patientMonth = monthToNumber(daynMonth[1].trim()),
              patientYear = bodValue[1].trim(),
              now = new Date(),
              currentYear = now.getFullYear(),
              currentDay = now.getDate(),
              currentMonth = now.getMonth(),
              patientAge = currentYear-patientYear

          if(patientMonth >= currentMonth){
            if(patientDay < currentDay){
              patientAge--
            }
          }
          return patientAge
      }
      const preventMinusAge = (age) => {
          return age < 0 ? 0 : age
      }

      let bodValue = $('#bod').val().split(','),
          patientAge = findExectlyAge(bodValue)

      //Display on age input
      patientAge = preventMinusAge(patientAge)
      $('#age').val(patientAge)
  },

  componentDidMount(){

    $('#age').focus(function(){
      $('.patient-detail-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-detail-box').removeClass('box-key-press')
    }),

    $('#emergencyCall').focus(function(){
      $('.patient-detail-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-detail-box').removeClass('box-key-press')
    }),

    $('#tel').focus(function(){
      $('.patient-detail-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-detail-box').removeClass('box-key-press')
    })

  },

  render(){
    return(
      <div className="row">
        <div className="input-field">
          <input id="age" type="text" className="validate" onClick={this.onClickAge}/>
          <label htmlFor="age">Age</label>
        </div>
        <div className="input-field">
          <input id="emergencyCall" type="text" className="validate"/>
          <label htmlFor="emergencyCall">Emergency call</label>
        </div>
        <div className="input-field">
          <input id="tel" type="text" className="validate"/>
          <label htmlFor="tel">Tel.</label>
        </div>
      </div>
    )
  }
})
