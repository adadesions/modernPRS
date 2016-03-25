let ratingImg = {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'spaceAround',
      marginLeft: '4em'
    }

RatingScale = React.createClass({
  getRatingData(){
    return [
      {_id: 1, imgSrc: '/images/emoticon/level1.png', score: 1},
      {_id: 2, imgSrc: '/images/emoticon/level2.png', score: 2},
      {_id: 3, imgSrc: '/images/emoticon/level3.png', score: 3},
      {_id: 4, imgSrc: '/images/emoticon/level4.png', score: 4},
      {_id: 5, imgSrc: '/images/emoticon/level5.png', score: 5},
      {_id: 6, imgSrc: '/images/emoticon/level6.png', score: 6},
      {_id: 7, imgSrc: '/images/emoticon/level7.png', score: 7},
      {_id: 8, imgSrc: '/images/emoticon/level8.png', score: 8},
      {_id: 9, imgSrc: '/images/emoticon/level9.png', score: 9},
      {_id: 10, imgSrc: '/images/emoticon/level10.png', score: 10}
    ]
  },

  renderRatingItems(){
      return this.getRatingData().map( item => {
        return <RatingItem key={item._id} info={item} />
      })
  },

  render(){
    return (
      <div style={ratingImg}>
        {this.renderRatingItems()}
      </div>
    )
  }
})
