import React from 'react';
import { useState,useEffect } from 'react';
import "./News.css"
import axios from 'axios';



export default function News({SearchData})
{
    let [NewsData,SetnewsData] = useState([])
    let [VisibleNews , SetVisibleNews] = useState(12)
   

    useEffect(()=>{
        async function GetData()
        {
        let Res  = await axios.get(`
            https://newsapi.org/v2/everything?q=${SearchData}&18&sortBy=publishedAt&apiKey=6bab30489ad244a5b9f56abd0a0bfcec`
        )
        console.log(Res.data.articles);
        SetnewsData(Res.data.articles);
        
        }
       GetData();
    },[SearchData])

    const loadMoreNews = () => {
      SetVisibleNews((prevCount) => prevCount + 12);
    };

    return(
        <>
        {
          NewsData.slice(0,VisibleNews).map((e, index) => (
            <div key={index} className="news-card">
              <img src={e.urlToImage} alt="News" className="news-image" />
              <h1 className="news-title">{e.title}</h1>
              <p className="news-description">{e.description}</p>
              <a href={e.url} className="news-link">Read More</a>
            </div>
          ))
        }
       
       <button
       onClick={loadMoreNews} className="load-more-btn">Load More News...</button>
      </>
      
    )
}