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
    height: '85vh',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: '2px'
  },
  colDetailPatient = {
    padding: '2em',
    WebkitBoxShadow: '1px 0px 1px 0px rgba(124,182,221,0.5)',
    MozBoxShadow: '1px 0px 1px 0px rgba(124,182,221,0.5)',
    boxShadow: '1px 0px 1px 0px rgba(124,182,221,0.5)',
    borderRight: '1px solid rgba(124,182,221,0.5)',
    height: '85vh',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: '2px'
  },
  colPainSection = {
    padding: '2em',
    height: '160vh',
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
  }

PhysicalForm = React.createClass({

  componentDidMount(){
    (function($) {
      "use strict"
       var $navbar = $(".nav"),
          y_pos = $navbar.offset().top,
          height = $navbar.height()
    //scroll top 0 sticky
        $(document).scroll(function() {
            var scrollTop = $(this).scrollTop();
            if (scrollTop > 0) {
              $navbar.addClass("sticky");
            } else {
              $navbar.removeClass("sticky");
            }
        })
    })(jQuery, undefined)

    $(".menu").click(function(){
      $("#nav").toggleClass("open");
    })
  },

  render(){
    return(
      <div style={physicalFormBG} className="physical-form">
        <div className="coverPhysical">
          <img style={sizeImage} src="/images/cover/cover.jpg"/>
        </div>
        <div style={container}>
          <FormToolsBar />
          <div style={marginRow} className="row z-depth-1">
            <div style={colDetailPatient} className="col l6">
              <div className="row">
                <div style={center} className="col l6">
                  <PatiendImage />
                </div>
                <div className="col l6 patient-name-box">
                  <PatientName />
                </div>
              </div>
              <div className="row patient-detail-box">
                <div className="col l6">
                  <PatientDetialLeft />
                </div>
                <div className="col l6">
                  <PatientDetialRight />
                </div>
              </div>
            </div>
            <div style={colInterviewPatient} className="col l6">
              <PatientInterview />
            </div>
          </div>
          <div className="row z-depth-1">
            <div style={colModel} className="col l6">
              <PatientModel />
            </div>
            <div style={colPainSection} className="col l6">
              <PainSectionInput />
            </div>
          </div>
          <div className="row z-depth-1">
            <div style={colOrgan} className="col l6">
              <PatientOrgan />
            </div>
            <div style={colAssessment} className="col l6">
              <Assessment />
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
