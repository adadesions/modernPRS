let scroll = {
      height: '3em'
    },
    scrollPain = {
      overflowY: 'auto',
      height: '92vh',
      display: 'flex',
      justifyContent: 'center'
    },
    container = {
      width: '90%'
    }
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
    }

PainSectionInput = React.createClass({
  componentDidMount(){
    $('#painScore').focus(function(){
      $('.patient-pain-section-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-pain-section-box').removeClass('box-key-press')
    }),

    $('#typeOfPain').focus(function(){
      $('.patient-pain-section-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-pain-section-box').removeClass('box-key-press')
    }),

    $('#duration').focus(function(){
      $('.patient-pain-section-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-pain-section-box').removeClass('box-key-press')
    }),

    $('#agg').focus(function(){
      $('.patient-pain-section-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-pain-section-box').removeClass('box-key-press')
    }),

    $('#rest').focus(function(){
      $('.patient-pain-section-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-pain-section-box').removeClass('box-key-press')
    }),

    $('#painLocation').focus(function(){
      $('.patient-pain-section-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-pain-section-box').removeClass('box-key-press')
    }),

    $('#presentAndPastHistory').focus(function(){
      $('.patient-pain-section-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-pain-section-box').removeClass('box-key-press')
    }),

    $('#assessment').focus(function(){
      $('.patient-pain-section-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-pain-section-box').removeClass('box-key-press')
    }),

    $(document).ready(function() {
      $('select').material_select()
    })

  },

  durationChange() {
    let value = $('#duration').val()
    //Update input-range
    $('#input-range').val(value)
  },

  render(){
    return(
      <div id="style-1" style={scrollPain} className="row patient-pain-section-box">
        <div style={container}>
          <label style={fontSize}>Pain score</label>
            <div>
              <label name='arom-label' style={subfontSize}>AROM</label>
              <RatingScale name='arom'/>
            </div>
            <div>
              <label name='prom-label' style={subfontSize}>PROM</label>
              <RatingScale name='prom'/>
            </div>
            <div className="input-field">
              <select id="typeOfPain" defaultValue="topicTypeOfPain" className="icons">
                <option value="topicTypeOfPain" disabled>Choose your option</option>
                <option value="pain" data-icon="images/typeofpain/pain.png" className="left circle">Pain</option>
                <option value="referedPain" data-icon="images/typeofpain/refered-line.png" className="left circle">Referred Pain</option>
                <option value="numbless" data-icon="images/typeofpain/numbless.png" className="left circle">Numbless</option>
                <option value="subluxation" data-icon="images/typeofpain/subluxation.png" className="left circle">Subluxation</option>
                <option value="tightness" data-icon="images/typeofpain/tighness.png" className="left circle">Tightness</option>
                <option value="weakness" data-icon="images/typeofpain/weakness.png" className="left circle">Weakness</option>
                <option value="incisionLine" data-icon="images/typeofpain/incision-line.png" className="left circle">Incision Line</option>
                <option value="other" data-icon="images/typeofpain/other.png" className="left circle">Other</option>
              </select>
              <label htmlFor="typeOfPain">Type Of Pain</label>
            </div>
          <label style={fontSize} htmlFor="duration">Duration</label>
          <p className="range-field">
            <input type="range" id="duration" defaultValue="0" min="0" max="60" onChange={this.durationChange} />
            <input style={sizeInput} type="text" id="input-range" defaultValue="0" className="validate"/>
          </p>
          <div className="input-field">
            <input id="agg" type="text" className="validate"/>
            <label htmlFor="agg">Agg</label>
          </div>
          <div className="input-field">
            <input id="rest" type="text" className="validate"/>
            <label htmlFor="rest">Rest</label>
          </div>
          <div className="input-field col s12">
            <textarea style={scroll} id="painLocation" className="materialize-textarea"></textarea>
            <label htmlFor="painLocation">Pain Location</label>
          </div>
          <div className="input-field col s12">
            <textarea style={scroll} id="presentAndPastHistory" className="materialize-textarea"></textarea>
            <label htmlFor="presentAndPastHistory">Present & Past History</label>
          </div>
          <div className="input-field col s12">
            <textarea style={scroll} id="assessment" className="materialize-textarea"></textarea>
            <label htmlFor="assessment">Assessment</label>
          </div>
        </div>
      </div>
    )
  }
})
