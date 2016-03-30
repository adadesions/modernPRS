PatientRecordItem = React.createClass({
  propTypes : {
      record: React.PropTypes.any.isRequired
  },

  renderTools(){
    let value = Session.get('buttonID')
    if(value === "history"){
      <ToolsPatientRecord />
    }
    else if (value === "trash") {
      <ToolsPatientTrash />
    }
    console.log(value)
  },

  render() {
    let record = this.props.record,
        cn = record.CN,
        contraindication = record.interview.contraindication,
        firstname = record.information.firstname
     return (
       <tr>
         <td></td>
         <td>{cn}</td>
         <td>{contraindication}</td>
         <td>{firstname}</td>
         <td><ToolsPatientRecord /></td>
       </tr>
     )
  }
})
