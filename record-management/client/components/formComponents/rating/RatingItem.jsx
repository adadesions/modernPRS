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
    info: React.PropTypes.object.isRequired,
    isActive: React.PropTypes.bool.isRequired,
    name: React.PropTypes.string.isRequired
  },
  getInitialState() {
      return {
        ratingValue: this.props.info.score,
        imgSrc: this.props.info.passiveImg,
        isActive: this.props.isActive
      }
  },

  componentWillReceiveProps() {
      passiveImg = this.props.info.passiveImg,
      this.setState({
        imgSrc: passiveImg
      })
  },

  handleClick(e) {
      this.setState({isActive: true}, function () {
        let imgState = this.state.isActive,
            passiveImg = this.props.info.passiveImg,
            activeImg = this.props.info.activeImg,
            inputName = `[name=${this.props.name}-input]`,
            inputLabel = `[name=${this.props.name}-label]`

        //Switch image source
        if(imgState){
          this.setState({imgSrc: activeImg})
        }
        else{
          this.setState({imgSrc: passiveImg})
        }

        //Insert value to hidden input box
        $(inputName).val($(e.target).attr('data-score'))
        //Display value on label
        let nameUppercase = (this.props.name).toUpperCase()
            displayText = `${nameUppercase} (${$(e.target).attr('data-score')})`
        $(inputLabel).html(displayText)

      })
  },

  render() {
    return (
      <div style={groupRating}>
        <img
          name={this.props.name}
          style={paddingImg}
          src={this.state.imgSrc}
          data-score={this.props.info.score}
          onClick={this.handleClick}
        />
        <h6>{this.props.info.score}</h6>
      </div>
    )
  }
})
