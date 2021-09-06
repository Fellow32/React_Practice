import About from "../Pages/About";
import PostPage from "../Pages/PostPage";
import Posts from "../Pages/Posts";
import Login from "../Pages/Login";

export const privatesRoutes =[
     
    {path: '/about', components: About, exact:true},
    {path: '/posts', components: Posts, exact:true},
    {path: '/posts/:id', components:PostPage, exact:true},


]


export const publicRoutes = [
     
    {path: '/login', components: Login, exact:true},

]