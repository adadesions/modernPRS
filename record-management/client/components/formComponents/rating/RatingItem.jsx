let groupRating = {
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'column',
      textAlign: 'center'
    },
    paddingImg = {
      padding: '0.3em',
      width: '2.5em',
      height: '2.5em'
    }

RatingItem = React.createClass({
  propTypes: {
    info: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <div  style={groupRating}>
        <img style={paddingImg} src={this.props.info.imgSrc}/>
        <h6>{this.props.info.score}</h6>
      </div>
    )
  }
})
