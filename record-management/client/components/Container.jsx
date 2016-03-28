Container = React.createClass({
  // mixins: [ReactMeteorData],

  render(){
    return(
      <div className="container-feature">
        {this.props.content}
      </div>
    )
  }
})
