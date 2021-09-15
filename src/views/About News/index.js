import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'
import Layout from "../../componets/Layout";
import './style.css'
import Spinner from "../../componets/Spinner";
import NotFound from "../NotFound";

const AboutNews = () => {
  const [aboutNews, setAboutNews] = useState({})
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] =useState(false)
  const params = useParams()
  useEffect(() => {
    axios(`https://613f693be9d92a0017e176d2.mockapi.io/news/${params.id}`)
      .then(({data}) => {
        setAboutNews(data)
        setLoading(false)
      }).catch(()=> setNotFound(true)).finally(()=> setLoading(false))
  }, [params.id])
  if (loading) {
    return <Spinner/>

  }
  if (notFound){
    return <NotFound/>
  }
  return (
    <Layout>
      <div className='row'>
        <div className='col-md-6 mt-5'>
          <img className='about_img' src={aboutNews.image} alt=""/>
        </div>
        <div className='col-md-6 mt-5'>
          <h3>{aboutNews.title}</h3>
          <p>{aboutNews.descreption}</p>
          <p>By <b>{aboutNews.autor}</b></p>
          <p>Updated: <b>{aboutNews.date}</b></p>
        </div>

      </div>
    </Layout>
  )
}

export default AboutNews