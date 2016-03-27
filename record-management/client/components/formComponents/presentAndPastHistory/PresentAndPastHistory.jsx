let scroll = {
      height: '3em'
    },
    boxBottom = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '5em'
    }


PresentAndPastHistory = React.createClass({

  componentDidMount(){

    $(document).ready(function() {
      $('select').material_select()
    })

  },

  render(){
    return(
      <div>
        <div className="input-field col s12">
          <select id="presentAndPastHistory" defaultValue="default" className="icons">
            <option value="default" disabled>Choose your option</option>
            <option value="fourToSixMonths" className="left circle">4-6 months</option>
            <option value="twoToThreeMonths" className="left circle">2-3 months</option>
            <option value="oneMonth" className="left circle">1 month</option>
            <option value="threeToFourWeeks" className="left circle">3-4 weeks</option>
            <option value="oneToTwoWeeks" className="left circle">1-2 weeks</option>
          </select>
          <label htmlFor="presentAndPastHistory">Period</label>
        </div>

        <div className="input-field col l8">
          <textarea style={scroll} id="messagePresentAndPastHistory" className="materialize-textarea"></textarea>
          <label htmlFor="messagePresentAndPastHistory">Present & Past History Message</label>
        </div>
        <div style={boxBottom} className="input-field col l4">
          <a className="waves-effect waves-light btn">Add</a>
        </div>
      </div>
    )
  }
})
