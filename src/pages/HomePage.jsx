import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loader from 'src/components/modules/Loader'
import Main from 'src/components/template/Main'
import SideBar from 'src/components/template/SideBar'
import { getAllPosts } from 'src/services/user'

function HomePage() {
  const {data,isLoading}=useQuery({queryKey:["post-list"],queryFn:getAllPosts})
  console.log(data);
  return (
  <>
  {isLoading?(<Loader/>):(
      <div style={{display:"flex"}}>
      <SideBar/>
      <Main data={data}/>
      </div>
  )}
  </>
  )
}

export default HomePage
