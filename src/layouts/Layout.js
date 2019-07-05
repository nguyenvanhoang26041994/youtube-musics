import './Layout.scss';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div id="layout" className="layout min-h-screen flex flex-col m-auto">
    <div id="layout__bg" className="bg-primary bg-fixed fixed top-0 left-0 bg-cover w-screen h-screen" />
    <Header />
    <Navbar className="sticky top-0 w-screen z-20 bg-primary-blur " />
    <main className="flex flex-col flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
