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

  render(){
    return(
      <div id="style-1" style={scrollPain} className="row patient-pain-section-box">
        <div style={container}>
          <label style={fontSize}>Pain score</label>
            <div>
              <label style={subfontSize}>AROM</label>
              <RatingScale />
            </div>
            <div>
              <label style={subfontSize}>PROM</label>
              <RatingScale />
            </div>
            <div className="input-field">
              <select id="typeOfPain" defaultValue="topicTypeOfPain" className="icons">
                <option value="topicTypeOfPain" disabled>Choose your option</option>
                <option value="sharpPain" className="left circle">Sharp pain</option>
                <option value="deepDullPain" className="left circle">Deep Dull Pain</option>
                <option value="shinglesPain" className="left circle">Shingles Pain</option>
                <option value="sciaticaPain" className="left circle">Sciatica Pain</option>
                <option value="burningPain" className="left circle">Burning Pain</option>
                <option value="neuropathicPain" className="left circle">Neuropathic Pain</option>
                <option value="stabbingPain" className="left circle">Stabbing Pain</option>
                <option value="throbbingPain" className="left circle">Throbbing Pain</option>
                <option value="burning" className="left circle">Burning</option>
                <option value="prickling" className="left circle">Prickling</option>
              </select>
              <label htmlhtmlFor="typeOfPain">Type Of Pain</label>
            </div>
          <label style={fontSize} htmlhtmlFor="duration">Duration</label>
          <p className="range-field">
            <input type="range" id="duration" min="0" max="300" />
            <input style={sizeInput} type="text" id="input-range" defaultValue="0" className="validate"/>
          </p>
          <div className="input-field">
            <input id="agg" type="text" className="validate"/>
            <label htmlhtmlFor="agg">Agg</label>
          </div>
          <div className="input-field">
            <input id="rest" type="text" className="validate"/>
            <label htmlhtmlFor="rest">Rest</label>
          </div>
          <div className="input-field col s12">
            <textarea style={scroll} id="painLocation" className="materialize-textarea"></textarea>
            <label htmlhtmlFor="painLocation">Pain Location</label>
          </div>
          <div className="input-field col s12">
            <textarea style={scroll} id="presentAndPastHistory" className="materialize-textarea"></textarea>
            <label htmlhtmlFor="presentAndPastHistory">Present & Past History</label>
          </div>
          <div className="input-field col s12">
            <textarea style={scroll} id="assessment" className="materialize-textarea"></textarea>
            <label htmlhtmlFor="assessment">Assessment</label>
          </div>
        </div>
      </div>
    )
  }
})
