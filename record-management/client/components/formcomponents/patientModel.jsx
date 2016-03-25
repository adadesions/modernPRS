let center = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'column'
    },
    sizeImage = {
      width: '10em',
      height: 'auto'
    },
    sizeImageside = {
      width: 'auto',
      height: '23em'
    },
    menuIcon = {
      bottom: '45px',
      right: '24px'
    },
    paddingImg = {
      padding: '0.3em',
      width: '2.5em',
      height: '2.5em'
    }

PatientModel = React.createClass({

  componentDidMount(){

  $('.front-model').click(function(){
    $('.menu-model').removeClass('hidden')
    $('.pain-type-item').removeClass('hidden')
  }),

  $('.back-model').click(function(){
    $('.menu-model').removeClass('hidden')
    $('.pain-type-item').removeClass('hidden')
  }),

  $('.side-right-model').click(function(){
    $('.menu-model').removeClass('hidden')
    $('.pain-type-item').removeClass('hidden')
  }),

  $('.side-left-model').click(function(){
    $('.menu-model').removeClass('hidden')
    $('.pain-type-item').removeClass('hidden')
  }),

  $('.pain-type-item').click(function(){
    $('.menu-model').addClass('hidden')
    $('.pain-type-item').addClass('hidden')
  })
  },

  render(){
    return(
      <div style={center} className="col l12 model">
        <div className="row">
          <div className="col l6 front-model">
            <img style={sizeImage} src="/images/body-front.png"/>
          </div>
          <div className="col l6 back-model">
            <img style={sizeImage} src="/images/body-back.png"/>
          </div>
        </div>
        <div className="row">
          <div className="col l6 side-right-model">
            <img style={sizeImageside} src="/images/body-right.png"/>
          </div>
          <div className="col l6 side-left-model">
            <img style={sizeImageside} src="/images/body-left.png"/>
          </div>
        </div>
        <div className="fixed-action-btn horizontal click-to-toggle menu-model hidden">
          <a className="btn-floating btn-large red">
            <i className="large mdi-navigation-menu"></i>
          </a>
          <ul>
            <li><a className="btn-floating blue pain-type-item"><img style={paddingImg} src="/images/typeofpain/pain.png"/></a></li>
            <li><a className="btn-floating blue pain-type-item"><img style={paddingImg} src="/images/typeofpain/refered-line.png"/></a></li>
            <li><a className="btn-floating blue pain-type-item"><img style={paddingImg} src="/images/typeofpain/numbless.png"/></a></li>
            <li><a className="btn-floating blue pain-type-item"><img style={paddingImg} src="/images/typeofpain/subluxation.png"/></a></li>
            <li><a className="btn-floating blue pain-type-item"><img style={paddingImg} src="/images/typeofpain/tighness.png"/></a></li>
            <li><a className="btn-floating blue pain-type-item"><img style={paddingImg} src="/images/typeofpain/weakness.png"/></a></li>
            <li><a className="btn-floating blue pain-type-item"><img style={paddingImg} src="/images/typeofpain/incision-line.png"/></a></li>
            <li><a className="btn-floating blue pain-type-item"><img style={paddingImg} src="/images/typeofpain/other.png"/></a></li>
          </ul>
        </div>
      </div>
    )
  }
})
