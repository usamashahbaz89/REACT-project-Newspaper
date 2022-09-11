import React, { Component } from 'react'
import NewsComp from './NewsComp'
import Spinner from './Spinner';

export class News extends Component {
    articles = [];
    

    constructor(){
    super();
    this.state = { // setting initial states
        articles: this.articles,
        spinner: false,
        page :1
    }
   }
   async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=db66c82c5de54d6a840a7bcb9a739624&page=1&pageSize=${this.props.pageArticles}`
    this.setState({spinner:true})
    let data =  await fetch(url)
    let parsedData = await data.json();
    this.setState(
        {articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        spinner:false
    })
   }

handleNext= async()=>{
   
    
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=db66c82c5de54d6a840a7bcb9a739624&page=${this.state.page + 1}&pageSize=${this.props.pageArticles}`;

    this.setState({spinner:true})
    let data =  await fetch(url)
    let parsedData = await data.json();
    this.setState(
        {
            
            page:this.state.page + 1, // jis page pa ham jany wale han
            articles: parsedData.articles,
            spinner:false
        
        }
        
        )
}

   handlePrev = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=db66c82c5de54d6a840a7bcb9a739624&page=${this.state.page - 1}&pageSize=${this.props.pageArticles}`;
    this.setState({spinner: true})
    let data =  await fetch(url)
    let parsedData = await data.json();
    this.setState(
        {
            
            page:this.state.page - 1,
            articles: parsedData.articles,
            spinner :false
        
        }
        
        )
   }
   
    render() {
        let {newsItembg, newsItembtn, badge} = this.props;
        return (
           <>
             
              <h2 className='container my-5 text-center' style={{paddingTop:'100px'}}>Latest Trends - {this.props.category.replace(/^[a-z]/, function(m){ return m.toUpperCase() })}</h2>
              
            <div className='container my-3'>

                {/* show spinner when loading id true */}
                {this.state.spinner && <Spinner/>}  
                
                <div className='row '>
                    
                   {!this.state.spinner && this.state.articles.map((element)=>{ // setting final states through map
                    return (<div className='col-md-4 ' key={element.url}>
                        <NewsComp badge={badge} newsItembg={newsItembg} newsItembtn={newsItembtn} title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
                    </div>)
                     
                   })}
                    
                    

                </div>
                  
                < div className='container d-flex justify-content-between'>
               <button type='button' disabled={this.state.page<=1} className={`btn btn-${newsItembtn} my-5`} onClick={this.handlePrev}>&larr; Prev</button>
            <button type="button" disabled={this.state.page> Math.ceil(this.state.totalResults/this.props.pageArticles) }  className={`btn btn-${newsItembtn} my-5`} onClick={this.handleNext}>Next &rarr;</button>
               </div>
            </div>
            </>
        )
    }
}

export default News
