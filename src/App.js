
import {HashRouter as Router, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Home from './pages/Home';
import DogList from './pages/DogList';
import AdoptionsPages from './pages/AdoptionsPages'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import BlogDetailsPage from './pages/BlogDetailsPage' 
import ShopPages from './pages/ShopPages'
import ShopDetailsPage from './pages/ShopDetailsPage'
import BreederPage from './pages/BreederPage'
import HometwoPage from './pages/HometwoPage'
import ScrollToTopRoute from './ScrollToTopRoute'
import FullServicePage from './pages/FullServicePage'
import AddonDetailsPage from './pages/CombinationShedDetailsPage';
import CommbinationDetailsPage from './pages/CommbinationDetailsPage';
import BathDetailsPage from './pages/BathDetailsPage';
import IndividualDetailsPage from './pages/IndividualDetailsPage';
import FrenchieDetailsPage from './pages/FrenchieDetailsPage';
import BullDogDetailsPage from './pages/BullDogDetailsPage';
import GoldernDetailsPage from './pages/GoldernDetailsPage';
import CorgiDetailsPage from './pages/CorgiDetailsPage';
function App() {
  
  return (
  <div className='app'>
   
   <Router>
       <Header/>
       <Switch>
          <ScrollToTopRoute exact={true} path='/'>
          <Home/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/doglist'>
            <DogList/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/adoption'> 
            <AdoptionsPages/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/contacts'>
            <ContactPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/blogs'>
          <BlogPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/blog-details'>
          <BlogDetailsPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/shop'>
           <ShopPages/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/shop-details'>
          <ShopDetailsPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/breeder'>
          <BreederPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/full-details'>
          <FullServicePage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/bath-details'>
          <BathDetailsPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/combination-details'>
          <CommbinationDetailsPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/combinationShed-details'>
          <AddonDetailsPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/individual-details'>
          <IndividualDetailsPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/frenchie-details'>
          <FrenchieDetailsPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/bulldog-details'>
          <BullDogDetailsPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/goldern-details'>
          <GoldernDetailsPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/corgi-details'>
          <CorgiDetailsPage/>
          </ScrollToTopRoute>

          <ScrollToTopRoute exact={true} path='/home-two'>
          <HometwoPage/>
          </ScrollToTopRoute>
       </Switch>
       <Footer/>
   </Router>
 
  </div>
  );
}

export default App;
   