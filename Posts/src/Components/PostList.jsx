import React, {useState} from 'react'
import Post from './Post'
import {CSSTransition, TransitionGroup} from 'react-transition-group'


const PostList = ({posts,title,remove}) => {
   


      if (!posts.length){
          return (
            <div className = "info__text">Список постов пуст</div>
          ) 
      } 
      return ( <div>

          <h1 style ={{textAlign:'center'}}>         
             {title}
          </h1>
       <TransitionGroup>
        {posts.map ((post,index) => 
        <CSSTransition
             timeout ={500}
             classNames="post"
          >
        <Post 
        number = {index + 1 } 
        remove = {remove}
        post ={post}/>
        </CSSTransition>
        )}
        
         </TransitionGroup>
        </div>
    )
}


export default PostList