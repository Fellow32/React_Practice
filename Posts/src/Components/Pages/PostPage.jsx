import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import MyLoader from '../../UI/Loader/MyLoader'
import PostService from '../API/PostService'
import { useFetching } from '../hooks/useFetching'



const PostPage = () => {

    const params = useParams()
    const [post,setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById , isLoading, error ] = useFetching(async(id) => {
         const response = await PostService.getById(params.id)
         setPost(response.data)

    })

    
    const [fetchComments, isComLoading, comError] = useFetching (async(id)=>{
           const response = await PostService.getCommentsByPostId(id)
            setComments(response.data)

    })







    
    useEffect( ()=> {
         fetchPostById(params.id)
         fetchComments(params.id)
    },[])
    return (
        <div>

        <h1> Вы открыли страницу поста </h1>
        {isLoading 
        
        ? <MyLoader/>
        :<div>{post.id}. {post.title}</div>
        }
        <h1>
            Комментарии
        </h1>
             {isLoading

             ?<MyLoader/>
             :<div>  {comments.map(comm => 

              <div style ={{marginTop:'20px'}}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>

              </div>

             )}</div>
             
             }

        </div>

        
    )

}

export default PostPage