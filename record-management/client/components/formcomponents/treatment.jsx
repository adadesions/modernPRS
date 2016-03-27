let scroll = {
      height: '8em'
    },
    scrollTreatment = {
      overflowY: 'auto',
      height: '95vh',
      display: 'flex',
      justifyContent: 'center'
    },
    container = {
      width: '90%'
    }
Treatment = React.createClass({

  componentDidMount(){

    $('#treatment').focus(function(){
      $('.patient-treatment-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-treatment-box').removeClass('box-key-press')
    }),

    $('#note').focus(function(){
      $('.patient-treatment-box').addClass('box-key-press')
    }).blur(function () {
      $('.patient-treatment-box').removeClass('box-key-press')
    })

  },

  render(){
    return(
      <div id="style-1" style={scrollTreatment} className="row patient-treatment-box">
        <div style={container}>
          <div className="input-field col s12">
            <textarea style={scroll} id="treatment" className="materialize-textarea"></textarea>
            <label htmlFor="treatment">Treatment</label>
          </div>
          <div className="input-field col s12">
            <textarea style={scroll} id="note" className="materialize-textarea"></textarea>
            <label htmlFor="note">Note</label>
          </div>
        </div>
      </div>
    )
  }
})
