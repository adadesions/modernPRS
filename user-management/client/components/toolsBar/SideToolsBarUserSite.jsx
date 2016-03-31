let colorNav = {
      backgroundColor: '#004064',
      overflowY: 'auto'
    },
    avatarCenter = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '25em',
      color: '#fff',
      textAlign: 'center'
    },
    listCenter = {
      display: 'flex',
      justifyCenter: 'center',
      zIndex: '999',
      cursor: 'pointer'
    },
    marginList = {
          paddingTop: '3em',
          color: '#fff',
          display: 'flex',
          flexFlow: 'row',
          alignItems: 'center',
          paddingTop: '0.3em',
          paddingBottom: '0.3em',
          cursor: 'pointer'
    },
    colorText = {
      color: '#fff',
      display: 'flex',
      flexFlow: 'row',
      alignItems: 'center',
      paddingTop: '0.3em',
      paddingBottom: '0.3em',
      cursor: 'pointer'
    },
    sizeImgUser = {
      width: '10em',
      height: '10em',
      border: '3px solid #212121'
    },
    paddingImg = {
      marginRight: '1em',
      width: '3em',
      height: '3em'
    },
    styleSetting = {
      position: 'relative !important',
      top: '0 !important'
    },
    settingList = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexFlow: 'row',
      height: '4em'
    },
    textList = {
      display: 'flex',
      alignItems: 'center',
      flexFlow: 'row',
      justifyContent: 'center',
      fontSize: '14px'
    }

SideToolsBarUserSite = React.createClass({


  _onClickNew() {
      FlowRouter.go('createPhysicalForm')
  },


  render(){
    return(
      <ul style={colorNav} id="slide-out" className="side-nav fixed">
        <div style={avatarCenter}>
          <div>
            <img style={sizeImgUser} src="/images/ceo.png" className="circle"/>
            <h5>Ada Kaminkure</h5>
          </div>
        </div>
        <li id="new" style={listCenter} onClick={this._onClickNew}><a style={marginList}><img style={paddingImg} src="/images/icon/new.png" className="circle"/><h6>New</h6></a></li>
        <li id="history" style={listCenter} onClick={this._onClickHistory}><a style={colorText}><img style={paddingImg} src="/images/icon/history.png" className="circle"/><h6>History</h6></a></li>
        <li id="trash" style={listCenter} onClick={this._onClickTrash}><a style={colorText}><img style={paddingImg} src="/images/icon/trash.png" className="circle"/><h6>Trash</h6></a></li>
        <li id="setting" style={listCenter} data-activates="dropdown2" className="dropdown-button"><a style={colorText}><img style={paddingImg} src="/images/icon/set.png" className="circle"/><h6>Setting</h6></a></li>

        <ul style={styleSetting} id="dropdown2" className="dropdown-content">
          <li style={settingList}><a style={textList} href="#!">Account</a></li>
          <li style={settingList}><a style={textList} href="#!"><div>Activity logs<span className="new badge">1</span></div></a></li>
          <li className="divider"></li>
          <li style={settingList}><a style={textList} href="#!">Logout</a></li>
        </ul>

      </ul>
    )
  }
})
