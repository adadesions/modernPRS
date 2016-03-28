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
    }),

    $(document).ready(function() {
    $('select').material_select();
  });

  },

  render(){
    return(
      <div id="style-1" style={scrollTreatment} className="row patient-treatment-box">
        <div style={container}>
          <div className="input-field col s12">
            <select defaultValue="defult">
              <option value="defult" disabled>Choose your option</option>
              <optgroup label="Hydro Therapy Equipment">
                <option value="hydrotheraryTank">HYDROTHERAPY TANK</option>
                <option value="whirlpoolBath">WHIRLPOOL BATH</option>
                <option value="cryoCuff">Cryo cuff</option>
              </optgroup>
              <optgroup label="Electro Therapy">
                <option value="shortwaveMedicalDiathermy">SHORTWAVE MEDICAL DIATHERMY</option>
                <option value="microwaveMedicalDiathermy">MicroWAVE MEDICAL DIATHERMY</option>
                <option value="electricalMuscleStimulator">Electrical MUSCLE STIMULATOR</option>
                <option value="interferentialTherapyUnit">INTERFERENTIAL THERAPY UNIT</option>
                <option value="ultrasoundTherapyUnit">ULTRASOUND THERAPY UNIT</option>
                <option value="transcutaneousNerveStimulator">TRANSCUTANEOUS NERVE STIMULATOR (tens)</option>
                <option value="shockWaveDiathermy">shock wave diathermy</option>
                <option value="laser">Laser</option>
              </optgroup>
              <optgroup label="Heat & Cold Therapy Equipment">
                <option value="paraffinWaxBath">PARAFFIN WAX BATH (arm & hand)</option>
                <option value="infraRedLamp">INFRA-RED LAMP (Three Bulbs, Floor Model)</option>
                <option value="ultraVioletLamp">ULTRA VIOLET LAMP (Floor Model)</option>
              </optgroup>
              <optgroup label="Treatment Equipment">
                <option value="massage">MASSAGE</option>
                <option value="tiltTable">TILT TABLE</option>
                <option value="activityMattress">ACTIVITY MATTRESS</option>
                <option value="continuousPassiveMotion">CONTINUOUS PASSIVE MOTION</option>
                <option value="shoulderPulleySet">SHOULDER PULLEY SET</option>
                <option value="suspension">Suspension</option>
                <option value="tractionAids">Traction Aids</option>
              </optgroup>
            </select>
            <label>Treatment</label>
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
