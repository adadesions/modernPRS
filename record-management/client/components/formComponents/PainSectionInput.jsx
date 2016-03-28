let scroll = {
      height: '3em'
    },
    scrollPain = {
      overflowY: 'auto',
      height: '92vh'
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
    },
    borderBox = {
      padding:'1em',
      borderRadius: '2px',
      border: '1px solid rgba(124,182,221,0.5)'
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
          <label>Present & Past History</label>
          <div style={borderBox} className="input-field col s12">
            <PresentAndPastHistory />
          </div>
        </div>
      </div>
    )
  }
})
