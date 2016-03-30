let flowRow = {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    flowRowIcon = {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      cursor: 'pointer'
    }


ToolsPatientRecord = React.createClass({

  render(){
      return(
        <div id="toolsRecord" style={flowRow}>
          <div style={flowRowIcon}><i className="small material-icons">mode_edit</i>Edit</div>
          <div style={flowRowIcon}><i className="small material-icons">delete</i>Delete</div>
        </div>
      )
  }
})
