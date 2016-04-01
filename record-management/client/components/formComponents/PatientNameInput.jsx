PatientName = React.createClass({

  componentDidMount(){
    $('#firstname')
      .focus(function(){
          $('.patient-name-box')
            .addClass('box-key-press')
    })
      .blur(function () {
          $('.patient-name-box')
            .removeClass('box-key-press')
    }),

    $('#lastname')
      .focus(function(){
          $('.patient-name-box')
              .addClass('box-key-press')
    })
      .blur(function () {
          $('.patient-name-box')
              .removeClass('box-key-press')
    })
  },

  render(){
    return(
      <div className="row">
        <div className="input-field">
          <input
            id="firstname"
            type="text"
            className="validate"
          />
          <label htmlFor="firstname">Firstname</label>
        </div>
        <div className="input-field">
          <input
            id="lastname"
            type="text"
            className="validate"
          />
          <label htmlFor="lastname">Lastname</label>
        </div>
      </div>
    )
  }
})
