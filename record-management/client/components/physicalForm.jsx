let controlBar = {
      backgroundColor: '#0098CF'
  },
  center = {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
  },
  paddingRightcol = {
    padding: '2em',
    WebkitBoxShadow: '1px 0px 1px 0px rgba(0,0,0,0.5)',
    MozBoxShadow: '1px 0px 1px 0px rgba(0,0,0,0.5)',
    boxShadow: '1px 0px 1px 0px rgba(0,0,0,0.5)',
    height: '100vh',
  },
  paddingLeftCol = {
    padding: '2em',
    WebkitBoxShadow: '1px 0px 1px 0px rgba(0,0,0,0.5)',
    MozBoxShadow: '1px 0px 1px 0px rgba(0,0,0,0.5)',
    boxShadow: '1px 0px 1px 0px rgba(0,0,0,0.5)',
    height: '100vh',
  },
  marginBottom = {
    marginBottom: '0'
  },
  physicalFormBG = {
    backgroundColor: '#002331',
    display: 'flex',
    justifyContent: 'center'
  },
  container = {
    backgroundColor: '#fff',
    width: '80%'
  },
  marginRow = {
    paddingTop: '4.4em'
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
    //section sticky
    /*$(document).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if ($(window).height() > scrollTop) {
          $navbar.removeClass("sticky");
        } else {
          $navbar.addClass("sticky");
        }
    });*/
    })(jQuery, undefined)

    $(".menu").click(function(){
      $("#nav").toggleClass("open");
    })
  },

  render(){    
    return(
      <div style={physicalFormBG} className="physical-form">
        <div style={container}>
          <Navigator />
          <div style={marginRow} className="row">
            <div style={paddingLeftCol} className="col l6">
              <div style={marginBottom} className="row">
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
          <div className="row">
            <div style={paddingLeftCol} className="col l6">
              <PatientModel />
            </div>
            <div style={paddingRightcol} className="col l6">
              <PainSectionInput />
            </div>
          </div>
          <div className="row">
            <div style={paddingLeftCol} className="col l7">
              <PatientOrgan />
            </div>
            <div style={paddingRightcol} className="col l5">
              <Treatment />
            </div>
          </div>
        </div>
      </div>
    )
  }
})
