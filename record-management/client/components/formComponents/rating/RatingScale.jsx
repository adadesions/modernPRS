let ratingImg = {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'spaceAround',
      marginLeft: '4em'
    }

RatingScale = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
  },

  getRatingData() {
      return [
        {_id: 0, passiveImg: '/images/emoticon/level0.png',  activeImg: '/images/emoticon/level0_active.png', score: 0},
        {_id: 1, passiveImg: '/images/emoticon/level1.png',  activeImg: '/images/emoticon/level1_active.png', score: 1},
        {_id: 2, passiveImg: '/images/emoticon/level2.png',  activeImg: '/images/emoticon/level2_active.png', score: 2},
        {_id: 3, passiveImg: '/images/emoticon/level3.png',  activeImg: '/images/emoticon/level3_active.png', score: 3},
        {_id: 4, passiveImg: '/images/emoticon/level4.png',  activeImg: '/images/emoticon/level4_active.png', score: 4},
        {_id: 5, passiveImg: '/images/emoticon/level5.png',  activeImg: '/images/emoticon/level5_active.png', score: 5},
        {_id: 6, passiveImg: '/images/emoticon/level6.png',  activeImg: '/images/emoticon/level6_active.png', score: 6},
        {_id: 7, passiveImg: '/images/emoticon/level7.png',  activeImg: '/images/emoticon/level7_active.png', score: 7},
        {_id: 8, passiveImg: '/images/emoticon/level8.png',  activeImg: '/images/emoticon/level8_active.png', score: 8},
        {_id: 9, passiveImg: '/images/emoticon/level9.png',  activeImg: '/images/emoticon/level9_active.png', score: 9},
        {_id: 10,passiveImg: '/images/emoticon/level10.png', activeImg: '/images/emoticon/level10_active.png', score: 10}
      ]
  },

  getInitialState() {
    return {
      isActive: false
    }
  },

  renderRatingItems() {
      return this.getRatingData().map(item => {
        return <RatingItem key={item._id} info={item} name={this.props.name} isActive={this.state.isActive}/>
      })
  },

  handleClick(e){
      const setEveryInActive = () => {
        this.setState({isActive: false})
      }

      setEveryInActive()
  },

  render() {
    return (
      <div style={ratingImg} onClick={this.handleClick}>
        {this.renderRatingItems()}
        <input name={this.props.name+'-input'} type="number" hidden/>
      </div>
    )
  }
})
