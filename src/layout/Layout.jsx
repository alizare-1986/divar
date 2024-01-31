import Footer from "./Footer"
import Header from "./Header"

function Layout({children}) {
  return (
    <>
      <Header/>
      <div style={{minHeight:'100vh'}}>
        {children}
      </div>
      <Footer/>
    </>
  )
}

export default Layout
