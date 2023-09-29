import React, { useState } from 'react'
import classes from './navbar.module.css'
import { Link } from 'react-router-dom'
import womenImg from '../../assets/woman.jpg'

const Navbar = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/'>WebDevMania </Link>
        </div>
        <ul className={classes.center}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>Aabout</li>
          <li className={classes.listItem}>Contacts</li>
          <li className={classes.listItem}>Categories</li>
        </ul>
        <div className={classes.right}>
          <img onClick={() => setShowModel(prev => !prev)} src={womenImg} className={classes.img} />
          {showModel &&
            <div className={classes.modal}>
              <Link to='/create'>Create</Link>
              <span>Logout</span>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar