let displayPatientsBox = {
      width: '100%',
      zIndex: '999'
    },
    colSize = {
      width: '5em'
    },
    colNameSize = {
      width: '25em'
    }

PatientRecord = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
      let data = {},
          businessName = FlowRouter.getParam('businessName'),
          subscriber = Meteor.subscribe('onlyThisBusinessName', businessName)
      if(subscriber.ready()){
          data.records = Patients.find().fetch() || []
      }
      return data
  },

  getRenderPatientRecordItems() {
      if(this.data.records){
        return this.data.records.map( (record,index) => {
          return <PatientRecordItem key={index} record={record} />
        })
      }
  },

  render() {
      return (
        <div style={displayPatientsBox} className="display-patients">
          <table className="striped centered">
            <thead>
              <tr>
                  <th style={colSize} data-field="cn">No.</th>
                  <th style={colSize} data-field="cn">CN.</th>
                  <th style={colNameSize} data-field="name">Name</th>
                  <th style={colSize} data-field="contraindication">Contraindication</th>
                  <th style={colSize} data-field="tools"></th>
              </tr>
            </thead>
            <tbody>
              {this.getRenderPatientRecordItems()}
            </tbody>
          </table>
        </div>
      )
  }
})
