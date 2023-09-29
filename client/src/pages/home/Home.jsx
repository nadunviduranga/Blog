import React from 'react'
import classes from './home.module.css'
import Navbar from '../../components/navbar/Navbar'
import FeatureBlogs from '../../components/featuredBlog/FeaturedBlog'

const Home = () => {
  return (
    <div>
      < Navbar/>
      < FeatureBlogs />
    </div>
  )
}

export default Home