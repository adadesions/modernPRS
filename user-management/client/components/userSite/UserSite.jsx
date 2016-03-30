let colorNav = {
      backgroundColor: '#004064'
    },
    marginList = {
      paddingTop: '3em',
      color: '#fff',
      display: 'flex',
      flexFlow: 'row',
      alignItems: 'center',
      paddingTop: '0.3em',
      paddingBottom: '0.3em'
    },
    colorText = {
      color: '#fff',
      display: 'flex',
      flexFlow: 'row',
      alignItems: 'center',
      paddingTop: '0.3em',
      paddingBottom: '0.3em'
    },
    sizeImage = {
      width: '100%',
      height: '20em',
      marginTop: '4.83em'
    },
    sizeImgUser = {
      width: '10em',
      height: '10em',
      border: '3px solid #212121'
    },
    alignText = {
      textAlign: 'center',
      color: '#fff'
    },
    paddingImg = {
      marginRight: '1em',
      width: '3em',
      height: '3em'
    },
    paddingRowNav = {
      padding: '0'
    },
    paddingRow = {
      padding: '0',
      position: 'relative',
      zIndex: '-1'
    },
    listCenter = {
      display: 'flex',
      justifyCenter: 'center',
      zIndex: '999',
      cursor: 'pointer'
    },
    avatarCenter = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '25em',
      color: '#fff',
      textAlign: 'center'
    }

UserSite = React.createClass({
  mixins: [EnsureLogInMixin],

  componentDidMount(){
      $('slide-out').sideNav({
          menuWidth: 300, // Default is 240
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    ),

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
    }),

    (function($) {
      "use strict"
       var $navbarside = $(".side-nav-left"),
          y_pos = $navbarside.offset().top,
          height = $navbarside.height()
    //scroll top 0 sticky
        $(document).scroll(function() {
            var scrollTop = $(this).scrollTop();
            if (scrollTop > 0) {
              $navbarside.addClass("sticky");
              $('.cover-user-side img').css('marginLeft','20%')
              $('.display-patients').css('marginLeft','20%')
            } else {
              $navbarside.removeClass("sticky");
              $('.cover-user-side img').css('marginLeft','0')
              $('.display-patients').css('marginLeft','0')
            }
        })
    })(jQuery, undefined)

    $(".menu").click(function(){
      $("#nav").toggleClass("open");
    })

  },

  _onClickNew() {
      FlowRouter.go('physicalForm')
  },

  render(){
      return(
        <div className="row user-side">
          <div style={paddingRowNav} className="col l2 side-nav-left z-depth-1">
            <ul style={colorNav} id="slide-out" className="side-nav fixed">
              <div style={avatarCenter}>
                <div>
                  <img style={sizeImgUser} src="/images/ceo.png" className="circle"/>
                  <h5>Ada Kaminkure</h5>
                </div>
              </div>
              <li style={listCenter}><a style={marginList} onClick={this._onClickNew}><img style={paddingImg} src="/images/icon/new.png" className="circle"/><h6>New</h6></a></li>
              <li style={listCenter}><a style={colorText} ><img style={paddingImg} src="/images/icon/history.png" className="circle"/><h6>History</h6></a></li>
              <li style={listCenter}><a style={colorText} ><img style={paddingImg} src="/images/icon/trash.png" className="circle"/><h6>Trash</h6></a></li>
              <li style={listCenter}><a style={colorText} ><img style={paddingImg} src="/images/icon/set.png" className="circle"/><h6>Set</h6></a></li>
            </ul>
          </div>
          <ToolsBarUserSite />
          <div style={paddingRow} className="col l10">
            <div className="cover-user-side">
              <img className="z-depth-1" style={sizeImage} src="/images/cover/cover.jpg"/>
            </div>
            <PatientRecord />
          </div>
        </div>
      )
  }
})
