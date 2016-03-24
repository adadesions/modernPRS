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
    })

  },

  render(){
    return(
      <div id="style-1" style={scrollPain} className="row patient-pain-section-box">
        <div style={container}>
          <div className="input-field">
            <input id="painScore" type="text" className="validate"/>
            <label htmlhtmlFor="painScore">Pain score</label>
          </div>
          <div className="input-field">
            <input id="typeOfPain" type="text" className="validate"/>
            <label htmlhtmlFor="typeOfPain">Type of pain</label>
          </div>
          <div className="input-field">
            <input id="duration" type="text" className="validate"/>
            <label htmlhtmlFor="duration">Duration</label>
          </div>
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
