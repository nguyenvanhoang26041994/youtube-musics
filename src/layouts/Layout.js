import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div id="layout" className="min-h-screen flex flex-col m-auto">
    <Header />
    <Navbar />
    <main className="flex-1 bg-white">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
