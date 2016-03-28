let controlBar = {
      backgroundColor: '#0098CF'
  },
  center = {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
  },
  paddingRightcol = {
    padding: '2em',
    height: '100vh',
    backgroundColor: '#fff',
    borderRadius: '2px'
  },
  paddingLeftCol = {
    padding: '2em',
    WebkitBoxShadow: '1px 0px 1px 0px rgba(124,182,221,0.5)',
    MozBoxShadow: '1px 0px 1px 0px rgba(124,182,221,0.5)',
    boxShadow: '1px 0px 1px 0px rgba(124,182,221,0.5)',
    borderRight: '1px solid rgba(124,182,221,0.5)',
    height: '100vh',
    backgroundColor: '#fff',
    borderRadius: '2px'
  },
  paddingTable = {
    paddingLeft: '2em',
    paddingRight: '2em',
    height: '100vh',
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
    height: '90%',
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
            <div style={paddingLeftCol} className="col l6">
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
            <div style={paddingRightcol} className="col l6">
              <PatientInterview />
            </div>
          </div>
          <div className="row z-depth-1">
            <div style={paddingLeftCol} className="col l6">
              <PatientModel />
            </div>
            <div style={paddingRightcol} className="col l6">
              <PainSectionInput />
            </div>
          </div>
          <div className="row z-depth-1">
            <div style={paddingLeftCol} className="col l6">
              <PatientOrgan />
            </div>
            <div style={paddingRightcol} className="col l6">
              <Treatment />
            </div>
          </div>
          <div style={paddingTable} className="row z-depth-1">
            <ProgressionNote />
          </div>
        </div>
      </div>
    )
  }
})
