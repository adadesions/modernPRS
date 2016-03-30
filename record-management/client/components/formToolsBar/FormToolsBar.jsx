let inputPosition = {
      marginTop: '0.8em',
      marginLeft: '1em',
    }

FormToolsBar = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
      const findFromBusinessName = () => {
          return {'business.businessName': Meteor.user().profile.businessName}
      }
      let subscriber = Meteor.subscribe('onlyThisUser'),
          data = {}

      if(subscriber.ready()){
          data.amountOfRecord = Patients.find().count()
      }
      return data
  },

  isRequestedEmpty() {
      let firstname = !!$('#firstname').val(),
          lastname = !!$('#lastname').val()
      return firstname && lastname
  },

  addInvalidClassToRequested() {
      const addInvalidClass = ($) => {
          $.removeClass('valid')
           .addClass('invalid')
      }
      let $firstname = $('#firstname'),
          $lastname = $('#lastname')
      Lazy([$firstname, $lastname]).each( $ => addInvalidClass($))
  },

  _onClickSave() {
      let CN = $('#cn').val(),
          firstname = $('#firstname').val(),
          lastname = $('#lastname').val(),
          bod = $('#bod').val(),
          gender = $('#gender').val(),
          idCard = $('#idCard').val(),
          occupation = $('#occupation').val(),
          age = $('#age').val(),
          emergencyCall = $('#emergencyCall').val(),
          tel = $('#tel').val(),
          address = $('#address').val(),
          chiefComplaint = $('#chiefComplaint').val(),
          contraindication = $('#precautionAndContraindication').val(),
          diagnosis = $('#diagnosis').val(),
          arom = $('[name=arom-input]').val(),
          prom = $('[name=prom-input]').val(),
          typeOfPain = $('#typeOfPain').find(':selected').val(),
          duration = $('#input-range').val(),
          agg = $('#agg').val(),
          rest = $('#rest').val(),
          painLocation = $('#painLocation').val(),
          assessment = $('#assessment').val(),
          treatment = $('#treatment').val(),
          note = $('#note').val(),
          business = {
            businessName: Meteor.user().profile.businessName,
            businessType: Meteor.user().profile.businessType,
            ownerId: Meteor.userId()
          },
          history = Session.get('historyData'),
          patient = new Patient()

      patient.set({
          CN,
          business,
          information: {
            firstname,
            lastname,
            bod,
            age,
            gender,
            emergencyCall,
            idCard,
            occupation,
            address
          },
          interview: {
            chiefComplaint,
            contraindication,
            diagnosis
          },
          painSection: {
            arom,
            prom,
            typeOfPain,
            duration,
            agg,
            rest,
            painLocation,
          },
          history,
          assessment,
          treatment,
          note,
          createdAt: new Date(),
          modifiedAt: new Date()
      })

      if(this.isRequestedEmpty()){
          patient.save(function () {
            let businessName = Session.get('businessName'),
                path = FlowRouter.path('mainPrsApp', businessName)
            FlowRouter.go(path)
          })
      }
      else{
        this.addInvalidClassToRequested()
      }

  },

  _onClickCancle() {
      let businessName = Session.get('businessName'),
          path = FlowRouter.path('mainPrsApp', businessName)
      FlowRouter.go(path)
  },

  padZero(number, digits) {
      let code = "0000000000"+number
      return code.substring(code.length-digits)
  },

  displayCN() {
      let fullYear = (new Date().getFullYear()+543).toString(),
          amountOfRecord = this.data.amountOfRecord+1,
          codeFormat = this.padZero(amountOfRecord, 6)
          cnString = `${fullYear.substring(2)}-${codeFormat}`
      return cnString
  },

  componentDidUpdate() {
      $('#cn').val(this.displayCN())
  },

  render(){
    return(
      <div className="nav-prs z-depth-1">
        <div className="section">
          <div className="container">
            <nav id="nav" className="nav">
              <ul className="clinic-number">
                <li>
                  <div className="input-field size-text-box">
                    <input
                      style={inputPosition} id="cn" type="text"
                      className="validate"
                    />
                    <label htmlFor="cn" className='active'>CN</label>
                  </div>
                </li>
              </ul>
              <ul className="navbar">
                <li>
                  <a
                    id="save-btn"
                    className="waves-effect waves-light btn green accent-4"
                    onClick={this._onClickSave}
                  >
                  Save
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    id="cancle-btn"
                    className="waves-effect waves-light btn red accent-4"
                    onClick={this._onClickCancle}
                    >
                      Cancle
                    </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
})
