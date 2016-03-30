PatientRecordItem = React.createClass({
  propTypes : {
      record: React.PropTypes.any.isRequired
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
