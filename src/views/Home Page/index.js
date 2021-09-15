import React, {useEffect, useState} from "react";
import Layout from "../../componets/Layout";
import axios from "axios";
import './style.css'
import {Link} from "react-router-dom";
import Spinner from "../../componets/Spinner";

const HomePage = () => {
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])
  useEffect(() => {
    axios('https://613f693be9d92a0017e176d2.mockapi.io/news/2')
      .then(({data}) => {

        setNews(data)
        setLoading(false)
      })
  }, [])
  if (loading) {
    return <div className='d-flex justify-content-center'>
      <Spinner/>
    </div>
  }
  return (
    <Layout>
      <Link to={`/news/1`}>

        <h2 className='text-center text-secondary'>{news.title}</h2>
        <img className='home_img' src={news.image} alt=""/>
      </Link>
      <h2 className='text-center text-secondary'>euronews.</h2>
      <p className='text-center'>ALL VIEWS</p>
    </Layout>
  )
}

export default HomePage