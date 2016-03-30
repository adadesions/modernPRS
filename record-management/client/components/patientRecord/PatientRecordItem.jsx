PatientRecordItem = React.createClass({
  propTypes : {
      record: React.PropTypes.any.isRequired
  },

  render() {
      let record = this.props.record,
          cn = record.CN,
          contraindication = record.interview.contraindication,
          firstname = record.information.firstname,
          lastname = record.information.lastname,
          name = `${firstname} ${lastname}`
       return (
         <tr>
           <td></td>
           <td>{cn}</td>
           <td>{name}</td>
           <td>{contraindication}</td>
           <td><ToolsPatientRecord /></td>
         </tr>
       )
  }
})
