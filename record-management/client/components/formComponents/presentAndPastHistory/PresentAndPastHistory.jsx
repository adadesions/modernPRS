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
  getInitialState() {
      return {
        historyData: []
      }
  },

  componentDidMount(){
      $(document).ready(function() {
        $('select').material_select()
      })
  },

  getRenderHistoryItem(historyData) {
    return historyData.map( (item,i) => {
        return <PresentAndPastHistoryItems key={i} historyData={item}/>
    })
},

  onClickAdd() {
      const clearInput = () => {
          messageHistory = $('#message-history').val("")
      }
      const sortByIndex = (data) => {
          let indexNumber = (data) => {
            return parseInt(data.index)
          }
          return Lazy(data).sortBy(indexNumber).toArray()
      }
      let index = $('#period-choices').find(':selected').attr('data-index'),
          period = $('#period-choices').find(':selected').val(),
          messageHistory = $('#message-history').val(),
          oldHistoryData = this.state.historyData,
          newData = {index,period,messageHistory},
          historyData = sortByIndex([newData].concat(oldHistoryData))
      this.setState({historyData: historyData}, function () {
          clearInput()
          // console.log($('table').find('tr').text());
      })
  },

  render(){
    return(
          <div>
            <div className="input-field col s12">
              <select id="period-choices" defaultValue="default" className="icons">
                <option value="default" disabled>Choose your option</option>
                <option data-index='7' value="More than 6 months" className="left circle">More than 6 months</option>
                <option data-index='6' value="4-6 months" className="left circle">4-6 months</option>
                <option data-index='5' value="2-3 month" className="left circle">2-3 months</option>
                <option data-index='4' value="1 month" className="left circle">1 month</option>
                <option data-index='3' value="3-4 weeks" className="left circle">3-4 weeks</option>
                <option data-index='2' value="1-2 weeks" className="left circle">1-2 weeks</option>
                <option data-index='1' value="Less than 7 days" className="left circle">Less than 7 days</option>
                <option data-index='0' value="Today" className="left circle">Today</option>
              </select>
              <label htmlFor="period-choices">Period</label>
            </div>

            <div className="input-field col l8">
              <textarea style={scroll} id="message-history" className="materialize-textarea"></textarea>
              <label htmlFor="message-history">Present & Past History Message</label>
            </div>
            <div style={boxBottom} className="input-field col l4">
              <a
                className="waves-effect waves-light btn"
                onClick={this.onClickAdd}
              >
              Add
              </a>
            </div>
            <div className="col l12">
              <table>
                <thead>
                  <tr>
                    <th data-field="id">Present & Past History</th>
                    <th data-field="name">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {this.getRenderHistoryItem(this.state.historyData)}
                </tbody>
              </table>
            </div>
        </div>
    )
  }
})
