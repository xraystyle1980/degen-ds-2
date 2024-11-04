import Home from '@/pages/Home';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    );
  };

export default AppRoutes;