PresentAndPastHistoryItems = React.createClass({
  propTypes: {
    historyData: React.PropTypes.object.isRequired,
  },

  render(){
    return(
          <tr>
            <td>{this.props.historyData.period}</td>
            <td>{this.props.historyData.messageHistory}</td>
          </tr>
    )
  }
})
