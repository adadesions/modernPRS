PresentAndPastHistoryItems = React.createClass({

  render(){
    return(
      <div className="col l12">
        <table>
        <thead>
          <tr>
              <th data-field="id">Present & Past History</th>
              <th data-field="name">Message</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
})
