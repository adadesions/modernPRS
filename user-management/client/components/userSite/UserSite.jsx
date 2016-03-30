let alignText = {
      textAlign: 'center',
      color: '#fff'
    },
    paddingRowNav = {
      padding: '0'
    },
    paddingRow = {
      padding: '0',
      position: 'relative'
    },
    sizeImage = {
      width: '100%',
      height: '20em',
      marginTop: '4.83em'
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
              $('.cover-and-record').css('marginLeft','16.67%')
            } else {
              $navbarside.removeClass("sticky");
              $('.cover-and-record').css('marginLeft','0')
            }
        })
    })(jQuery, undefined)

    $(".menu").click(function(){
      $("#nav").toggleClass("open");
    })

  },


  render(){
      return(
        <div className="row user-side">
          <div style={paddingRowNav} className="col l2 side-nav-left z-depth-1">
            <SideToolsBarUserSite />
          </div>
          <ToolsBarUserSite />
          <div style={paddingRow} className="col l10 cover-and-record">
            <div className="cover-user-side">
              <img className="z-depth-1" style={sizeImage} src="/images/cover/cover.jpg"/>
            </div>
            <PatientRecord />
          </div>
        </div>
      )
  }
})
