import { Routes, Route} from  'react-router-dom'
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Details } from "./pages/Details";
import { Notfound } from './pages/Notfound';
import { Albums } from './components/Albums';
import { Album } from './components/Album';

export const App = () => {
  return (
    <div>
      <Header />

        <Routes>
          <Route path="/" element={ <Albums /> } />
          <Route path="/album/:albumId" element={ <Album /> } />
          <Route path="/details/:id" element={ <Details /> } />
          <Route path="*" element={ <Notfound /> } />
        </Routes>
    
      <Footer />
    </div>
  )
}

export default App;