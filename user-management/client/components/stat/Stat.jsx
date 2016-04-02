let colorP = {
      color: '#394264'
    }

Stat = React.createClass({

  render(){
      return(
        <div className="donut-chart-block block z-depth-1">
            <div className="donut-chart z-depth-1">
              <div id="porcion1" className="recorte"><div className="quesito data1" os-rel="21"></div></div>
              <div id="porcion2" className="recorte"><div className="quesito data2" os-rel="39"></div></div>
              <div id="porcion3" className="recorte"><div className="quesito data4" os-rel="31"></div></div>
              <div id="porcionFin" className="recorte"><div className="quesito data3" os-rel="9"></div></div>
              <p className="center-date z-depth-1">April<br/><span className="scnd-font-color">2016</span></p>
            </div>
            <ul className="os-percentages horizontal-list">
                <li>
                    <p className="data1 os scnd-font-color">data1</p>
                    <p style={colorP} className="os-percentage"><span style={colorP}>21</span><sup>%</sup></p>
                </li>
                <li>
                    <p className="data2 os scnd-font-color">data2</p>
                    <p style={colorP} className="os-percentage"><span style={colorP}>39</span><sup>%</sup></p>
                </li>
                <li>
                    <p className="data3 os scnd-font-color">data3</p>
                    <p style={colorP} className="os-percentage"><span style={colorP}>9</span><sup>%</sup></p>
                </li>
                <li>
                    <p className="data4 os scnd-font-color">data4</p>
                    <p style={colorP} className="os-percentage"><span style={colorP}>31</span><sup>%</sup></p>
                </li>
            </ul>
          </div>
      )
  }
})
