import Header from "./header/header"
import Footer from "./footer/footer"

function Layout({children}) {
  return (
    <div className="2xl:grid justify-center">
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout