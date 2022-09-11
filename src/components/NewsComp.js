import React, { Component } from 'react'

export class NewsComp extends Component {
  render() {

    let {title, description, urlToImage, url, author, publishedAt, source, newsItembg, newsItembtn, badge} = this.props;

    
    return (
      <div className='my-3'>
        <div className="card shadow" >
        
  <img src={!urlToImage?"https://www.wpkube.com/wp-content/uploads/2019/02/503-unavailable-error-wpk-1280x720.jpg":urlToImage} className={`card-img-top text-center bg-${newsItembg}`} alt='Unable to display'/>
  <div className={`card-body bg-${newsItembg}`}>
  
    <h6 className="card-title"><b>{!title?"When you play the game of thrones you win or you die":title}<h6><span className={`badge bg-${badge} text-${newsItembtn}`}>{source}</span></h6></b>
</h6>
    <p><em>{!author?"Unknown Author":author}</em></p>
    <p><small>{publishedAt}</small></p>
    <p className="card-text">{!description?"When winter comes, You will hear no lions roar, No stags grazing the fields, No roses growing in the meadows, No snakes in the sand, no falcons flying in the air, Not even the dragons breath will warm you in your halls.You shall hear only the wolves howl, And then you will know. Winter has come.":description}</p>
    <a href={url}  className={`btn btn-${newsItembtn} btn-sm`}>Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsComp
