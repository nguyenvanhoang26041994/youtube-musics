import './Layout.scss';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div id="layout" className="layout min-h-screen flex flex-col m-auto">
    <Header />
    <Navbar className="sticky top-0 w-screen z-20" />
    <main className="flex flex-col flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
