import React, {useEffect, useState} from "react";

import axios from "axios";
import Layout from "../../componets/Layout";
import {Link} from "react-router-dom";


const News =() =>{
  const [news, setNews] = useState([])
  useEffect(() =>{
    axios('https://613f693be9d92a0017e176d2.mockapi.io/news')
      .then(({data}) => setNews(data))
  }, [])
  return (
    <Layout>
      <div className='row'>

          {
            news.map(item =>
              <div className='col-md-3'>
                <Link to={`/new/${item.id}`}>
                  <img className='news-img' src={item.image} alt=""/>
                  <p>{item.title}</p>
                </Link>

              </div>
            )
          }


      </div>

    </Layout>
  )
}

export default News