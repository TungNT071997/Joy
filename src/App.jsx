import Header from './Layouts/component/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Makeup from './Pages/Makup';
import Price from './Pages/Price';
import WeddingDresses from './Pages/WeddingDresses';
import Hero from './Layouts/component/Hero/Hero';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/price-list" element={<Price />} />
        <Route path="/wedding-dresses" element={<WeddingDresses />} />
      </Routes>
    </Router>
  );
};

export default App;
