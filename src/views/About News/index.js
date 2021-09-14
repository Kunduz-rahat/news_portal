import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'
import Layout from "../../componets/Layout";
import './style.css'

const AboutNews = () => {
  const [aboutNews, setAboutNews] = useState({})
  const params = useParams()
  useEffect(() => {
    axios(`https://613f693be9d92a0017e176d2.mockapi.io/news/${params.id}`)
      .then(({data}) => setAboutNews(data))
  }, [params.id])
  return (
    <Layout>
      <div className='row'>
        <div className='col-md-6 mt-5'>
          <img className='about_img' src={aboutNews.image} alt=""/>
        </div>
        <div className='col-md-6 mt-5'>
          <h3>{aboutNews.title}</h3>
          <p>{aboutNews.descreption}</p>
          <p>{aboutNews.autor}</p>
          <p>{aboutNews.date}</p>
        </div>

      </div>
    </Layout>
  )
}

export default AboutNews