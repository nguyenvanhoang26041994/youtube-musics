import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div id="layout" className="min-h-screen flex flex-col m-auto bg-primary-gradient">
    <Header />
    <Navbar />
    <main className="flex flex-col flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
