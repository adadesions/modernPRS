PatientRecordItem = React.createClass({
  propTypes : {
      record: React.PropTypes.any.isRequired
  },

  _onClickItem() {
      // FlowRouter.go('showPhysicalForm')
  },

  componentDidMount(){

      $('.user-item').hover(function(){
          $('.user-item').toggleClass('.shadow-item')
      })

  },


  render() {
      let record = this.props.record,
          cn = record.CN,
          contraindication = record.interview.contraindication,
          firstname = record.information.firstname,
          lastname = record.information.lastname,
          name = `${firstname} ${lastname}`
       return (
         <tr className="user-item" onClick={this._onClickItem()}>
           <td></td>
           <td>{cn}</td>
           <td>{name}</td>
           <td>{contraindication}</td>
           <td><ToolsPatientRecord cn={cn}/></td>
         </tr>
       )
  }
})
