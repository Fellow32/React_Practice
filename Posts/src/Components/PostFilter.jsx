import React from 'react'
import MySelect from '../UI/Select/MySelect'
import MyInput from '../UI/Input/MyInput'

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
         <MyInput
                 value ={filter.query}
                  onChange ={e => setFilter({...filter, query: e.target.value})}
                  type ="text" 
                  placeholder ="поиск..."
                  />
                 


                 <MySelect 
                 value ={filter.sort}
                 onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                 defaultValue ={'Сортировка'}
                  options = {[
                    {value:'title', name:'По названию'},
                    {value:'body', name:'По описанию'}
                  ]}
                 />


        </div>
    )
}


export default PostFilter