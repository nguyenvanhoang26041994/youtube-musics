import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div id="layout" className="min-h-screen flex flex-col">
    <Header />
    <Navbar />
    <main className="main">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
