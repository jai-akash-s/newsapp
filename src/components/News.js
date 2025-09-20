import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap'
import NewsList from './NewsList';

const News = (categories) => {
    const[articles,setArticles]= useState([]);

    useEffect(()=> {
        let url=` https://newsapi.org/v2/top-headlines?country=us&category=${categories}&apikey=${process.env.REACT_APP_API_KEY}`;
       
        fetch(url)
        .then(response => response.json())  
        .then(data => setArticles(data.articles))
        .then(err => console.error("error in fetching:",err))
    },[categories])



  return (
    <div>
      <h2 className='text-center mt-3' >Latest <Badge bg='success'>News</Badge></h2>
      {/* map function to pass all my data in an array*/}
      {articles.map((news,index) => {
        return<NewsList key={index}
         title={news.title}
         description={news.description}
         src={news.urlToImage}
         url={news.url}
         
         />
         
      })}
    </div>
  )
}

export default News
