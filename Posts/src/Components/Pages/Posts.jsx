import React, {useEffect, useMemo, useRef, useState} from 'react'
import '../../Styles/App.css'
import PostList from '../../Components/PostList'
import PostForm from '../../Components/PostForm'
import PostFilter from '../../Components/PostFilter'
import MyModal from '../../UI/Modal/MyModal'
import MyButton from '../../UI/Button/MyButton'
import {usePosts} from '../../Components/hooks/usePosts'
import PostService from '../../Components/API/PostService'
import MyLoader from '../../UI/Loader/MyLoader'
import { useFetching } from '../../Components/hooks/useFetching'
import {getPageCount, getPagesArray} from '../../Components/utils/pages'
import Pagination from '../../UI/pagination/Pagination'




function Posts() {

  const [posts,setPosts] = useState([
    { id : 1, title : 'Javascript', body:'description'},
    { id : 2, title : 'Javascript', body:'description'},
    { id : 3, title : 'Javascript', body:'description'},
    { id : 4, title : 'Javascript', body:'description'},
  
  ])
  
const [filter,setFilter] = useState({sort:'', query:''})

const [modal,setModal] = useState(false)

const [totalPages, setTotalPages] = useState(0)
const [limit, setLimit] = useState (10)
const [page,setPage] = useState(1)
const sortedAndSearchedPosts = usePosts (posts,filter.sort,filter.query)
  







const [fetchPosts,isPostsLoading,postError] = useFetching(async(limit,page) => {
  const response = await PostService.getAll(limit, page)
  setPosts(response.data)
  const totalCount = response.headers['x-total-count']
  setTotalPages(getPageCount(totalCount,limit))
}) 



useEffect (() => {
    fetchPosts(limit,page)
},[])
 
const createPost =(newPost) => {
       setPosts ( [...posts, newPost])
       setModal(false)
}

const changePage = (page) => {
  setPage(page)
  fetchPosts(limit , page)
}


  
const removePost = (post) => {
  setPosts ( posts.filter(p => p.id !== post.id))
}



  return  ( 
      <div className ="App">
                 
               <MyButton onClick={() =>setModal(true)}> Создать пост</MyButton>
              <MyModal visible ={modal} setVisible={setModal}>

              <PostForm create ={createPost}/>
                <hr style ={{margin : '15px  0'}}></hr>

              </MyModal>


                 <PostFilter
                 filter ={filter}
                 setFilter ={setFilter}
                 />



                   {isPostsLoading
                   
                   ?   <div style ={{display:'flex', justifyContent:'center',marginTop:'150px'}}>
                     <MyLoader/>
                     </div>


                   :<PostList 
                   remove = {removePost}
                   posts ={sortedAndSearchedPosts} 
                   title = "Список постов 1"
                    />
                   
                   }

        
                <Pagination 
                page={page} 
                changePage ={changePage} 
                totalPages={totalPages}
                />
                 

      </div> 
  ) }


export default Posts
