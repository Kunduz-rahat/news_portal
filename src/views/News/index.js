import React, {useEffect, useState} from "react";
import './style.css'

import axios from "axios";
import Layout from "../../componets/Layout";
import {Link} from "react-router-dom";
import Spinner from "../../componets/Spinner";
import NotFound from "../NotFound";


const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] =useState(false)
  useEffect(() => {
    axios('https://613f693be9d92a0017e176d2.mockapi.io/news')
      .then(({data}) => {
        setNews(data)
        setLoading(false)
      }).catch(()=> setNotFound(true)).finally(()=> setLoading(false))
  }, [])
  if (loading) {
    return <Spinner/>

  }
  if (notFound){
    return <NotFound/>
  }
  return (
    <Layout>
      <div className='row'>

        {
          news.map(item =>
            <div className='col-md-3'>
              <Link to={`/news/${item.id}`}>
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