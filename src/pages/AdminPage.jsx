import React from 'react'
import CategoryForm from 'src/components/template/CategoryForm'
import CategoryList from 'src/components/template/CategoryList'

function AdminPage() {
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
      <CategoryForm/>
      <CategoryList/>
    </div>
  )
}

export default AdminPage
