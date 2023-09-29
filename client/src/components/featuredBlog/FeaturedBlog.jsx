import React from 'react'
import classes from './featuredBlog.module.css'
import mountainIms1 from '../../assets/mountain1.jpg'
import mountainIms2 from '../../assets/mountain2.jpg'
import mountainIms3 from '../../assets/mountain3.jpg'
import {MdOutlinePreview} from 'react-icons/md'
import {AiFillLike} from 'react-icons/ai'

const FeaturedBlog = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3>Featured Blogs</h3>

        <div className={classes.blogs}>

          <div className={classes.left}>
            <div className={classes.mainBlog}>
              <img src={mountainIms1} alt='' />
              <div className={classes.mainBlogData}>
                <div className={classes.categoryAndMetadata}>
                  <span className={classes.category}>Nature</span>
                  <div className={classes.metadata}>
                    <MdOutlinePreview /> 123 view
                  </div>
                  <div className={classes.metadata}>
                    <AiFillLike /> 102 likes
                  </div>
                </div>
                <h4>Blog 1 title</h4>
                <p className={classes.desc}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae amet in nihil fuga nulla harum distinctio officia expedita, dolorem iusto quisquam, dolores voluptatem sunt temporibus eum saepe. Excepturi, illum quo!
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author :</span> Villy</span>
                  <span><span>Created :</span> 28-09-2023</span>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.right}>
            <div className={classes.secondaryBlog}>
              <img src={mountainIms2} alt='' />
              <div className={classes.secondaryBlogData}>
                <h4>Blog 2 title</h4>
                <p className={classes.desc}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nulla, suscipit doloremque molestiae dicta consequuntur voluptas omnis ducimus voluptatibus iure aperiam minus? Non accusantium culpa ad dolor nulla est quisquam.
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span> Villy</span>
                  <span><span>Created:</span> 28-09-2023</span>
                </div>
              </div>
            </div>

            <div className={classes.secondaryBlog}>
              <img src={mountainIms3} alt='' />
              <div className={classes.secondaryBlogData}>
                <h4>Blog 3 title</h4>
                <p className={classes.desc}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nulla, suscipit doloremque molestiae dicta consequuntur voluptas omnis ducimus voluptatibus iure aperiam minus? Non accusantium culpa ad dolor nulla est quisquam.
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span> Villy</span>
                  <span><span>Created:</span> 28-09-2023</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FeaturedBlog