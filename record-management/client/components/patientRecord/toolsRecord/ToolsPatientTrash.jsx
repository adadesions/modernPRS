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

ToolsPatientTrash = React.createClass({

  render(){
      return(
        <div id="toolsRecord" style={flowRow}>
          <div style={flowRowIcon}><i className="small material-icons">restore</i>Restore</div>
          <div style={flowRowIcon}><i className="small material-icons">delete</i>Delete</div>
        </div>
      )
  }
})
