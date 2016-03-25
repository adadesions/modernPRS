Navigator = React.createClass({
  onClickSave() {
    let firstname = $('#firstname').val(),
        lastname = $('#lastname').val(),
        bod = $('#bod').val(),
        gender = $('#gender').val(),
        idCard = $('#idCard').val(),
        occupation = $('#occupation').val(),
        age = $('#age'),val(),
        emergencyCall = $('#emergencyCall').val(),
        tel = $('#tel').val(),
        patient = new Patient()
    patient.set({
        information: {
          firstname,
          lastname
        },
        createdAt: new Date()
    })
    patient.save(function (err) {
      if(err) throw err
      else console.log('Sucessfully');
    })
  },

  render(){
    return(
      <div className="nav-prs">
        <div className="section">
          <div className="container">
            <nav id="nav" className="nav">
              <ul className="navbar">
                <li>
                  <a
                    id="save-btn"
                    className="waves-effect waves-light btn"
                    onClick={this.onClickSave}
                  >
                  Save</a>
                </li>
                <li>
                  <a id="cancle-btn" className="waves-effect waves-light btn">Cancle</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
})
