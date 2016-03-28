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
      let bodValue = $('#bod').val().split(','),
          daynMonth = bodValue[0].split(' '),
          patientDay = daynMonth[0].trim(),
          patientMonth = monthToNumber(daynMonth[1].trim()),
          patientYear = bodValue[1].trim(),
          now = new Date(),
          currentDay = now.getDate(),
          currentYear = now.getFullYear(),
          currentMonth = now.getMonth(),
          patientAge = currentYear-patientYear

      if(patientMonth >= currentMonth){
        if(patientDay < currentDay){
          patientAge--
      }
    }
    //Display on age input
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
