let marginLeft = {
      marginRight: '0.5em'
    },
    imgSize = {
      height: '25em',
      width: 'auto'
    }




PatientOrgan = React.createClass({

  componentDidMount(){

    $('.organ-pain-type-item').click(function(){
      $('.menu-organ').addClass('hidden')
      $('.organ-pain-type-item').addClass('hidden')
    }),

    $(".organ-model").click(function(e) {

      var offset = $(this).offset();
      var relativeX = (e.pageX - offset.left)/10;
      var relativeY = (-(e.pageY - offset.top)/10)-50;

      $('.fixed-action-btn.horizontal.click-to-toggle.menu-organ').css('position','absolute')
      $('.fixed-action-btn.horizontal.click-to-toggle.menu-organ').css('right',relativeX+'em')
      $('.fixed-action-btn.horizontal.click-to-toggle.menu-organ').css('left',relativeX+'em')
      $('.fixed-action-btn.horizontal.click-to-toggle.menu-organ').css('bottom',relativeY+'em')

      $('.fixed-action-btn.horizontal.click-to-toggle.menu-organ').openFAB();

      $('.menu-organ').removeClass('hidden')
      $('.organ-pain-type-item').removeClass('hidden')
    })

  },

  render(){
    return(
      <div className="col l12 organ">
        <div className="row">
          <div style={marginLeft} className="col l6 organ-model">
            <img style={imgSize} src="/images/organ.png"/>
          </div>
        </div>
        <div className="fixed-action-btn horizontal click-to-toggle menu-organ hidden">
          <a className="btn-floating btn-large red">
            <i className="large mdi-navigation-menu"></i>
          </a>
          <ul>
            <li><a className="btn-floating blue organ-pain-type-item"><img style={paddingImg} src="/images/typeofpain/pain.png"/></a></li>
            <li><a className="btn-floating blue organ-pain-type-item"><img style={paddingImg} src="/images/typeofpain/refered-line.png"/></a></li>
            <li><a className="btn-floating blue organ-pain-type-item"><img style={paddingImg} src="/images/typeofpain/numbless.png"/></a></li>
            <li><a className="btn-floating blue organ-pain-type-item"><img style={paddingImg} src="/images/typeofpain/subluxation.png"/></a></li>
            <li><a className="btn-floating blue organ-pain-type-item"><img style={paddingImg} src="/images/typeofpain/tighness.png"/></a></li>
            <li><a className="btn-floating blue organ-pain-type-item"><img style={paddingImg} src="/images/typeofpain/weakness.png"/></a></li>
            <li><a className="btn-floating blue organ-pain-type-item"><img style={paddingImg} src="/images/typeofpain/incision-line.png"/></a></li>
            <li><a className="btn-floating blue organ-pain-type-item"><img style={paddingImg} src="/images/typeofpain/other.png"/></a></li>
          </ul>
        </div>
      </div>
    )
  }
})
