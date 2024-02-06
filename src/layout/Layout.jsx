import Footer from "./Footer"
import Header from "./Header"

function Layout({children}) {
  return (
    <>
      <Header/>
      <div style={{minHeight:'200vh'}}>
        {children}
      </div>
      <Footer/>
    </>
  )
}

export default Layout
