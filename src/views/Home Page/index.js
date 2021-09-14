import React, {useEffect, useState} from "react";
import Layout from "../../componets/Layout";
import axios from "axios";
import './style.css'
import {Link} from "react-router-dom";

const HomePage =() =>{
  const [news, setNews] = useState([])
  useEffect(()=>{
    axios('https://613f693be9d92a0017e176d2.mockapi.io/news/1')
      .then(({data})=> setNews(data))
  },[])

  return (
    <Layout>
      <Link to={`/new/1`}>
        <h2 className='text-center'>{news.title}</h2>
        <img className='news-img' src={news.image} alt=""/>
      </Link>

    </Layout>
  )
}

export default HomePage