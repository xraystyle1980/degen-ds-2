import Home from '@/pages/Home';
// import LadleApp from '@/LadleApp';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/ladle" element={<LadleApp />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    );
  };

export default AppRoutes;