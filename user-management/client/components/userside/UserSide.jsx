let colorNav = {
      backgroundColor: '#3B3F5E'
    },
    marginList = {
      marginTop: '4em',
      color: '#fff',
      display: 'flex',
      flexFlow: 'row',
      paddingTop: '0.3em',
      paddingBottom: '0.3em'
    },
    colorText = {
      color: '#fff',
      display: 'flex',
      flexFlow: 'row',
      paddingTop: '0.3em',
      paddingBottom: '0.3em'
    },
    sizeImage = {
      width: '83.2%',
      height: '20em',
      marginLeft: '16em',
      marginTop: '4.8em',
      WebkitBoxShadow: '0px 0px 25px 0px rgba(0,0,0,0.8)',
      MozBoxShadow: '0px 0px 25px 0px rgba(0,0,0,0.8)',
      boxShadow: '0px 0px 25px 0px rgba(0,0,0,0.8)'
    },
    displayPatientsBox = {
      width: '83.2%',
      marginLeft: '16em'
    },
    sizeImgUser = {
      width: '14em',
      height: '14em',
      marginTop: '6.3em'
    },
    alignText = {
      textAlign: 'center',
      color: '#fff'
    },
    paddingImg = {
      marginRight: '1em'
    }

UserSide = React.createClass({

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
    })
  },

  render(){
    return(
      <div className="user-side">
        <ul style={colorNav} id="slide-out" className="side-nav fixed">
          <li style={alignText}>
            <img style={sizeImgUser} src="/images/ceo.png" className="circle"/>
            <h5>Ada Kaminkure</h5>
          </li>
          <li><a style={marginList} href="#!"><img style={paddingImg} src="/images/icon/new.png" className="circle"/><h5>New</h5></a></li>
          <li><a style={colorText} href="#!"><img style={paddingImg} src="/images/icon/history.png" className="circle"/><h5>History</h5></a></li>
          <li><a style={colorText} href="#!"><img style={paddingImg} src="/images/icon/trash.png" className="circle"/><h5>Trash</h5></a></li>
          <li><a style={colorText} href="#!"><img style={paddingImg} src="/images/icon/set.png" className="circle"/><h5>Set</h5></a></li>
        </ul>
        <ToolsBarUserSide />
          <div className="cover-user-side">
            <img style={sizeImage} src="/images/cover/cover.jpg"/>
          </div>
          <div style={displayPatientsBox} className="display-patients">
            <table className="striped">
              <thead>
                <tr>
                    <th data-field="id">CN.</th>
                    <th data-field="name">Contraindication</th>
                    <th data-field="price">Name</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    )
  }
})
