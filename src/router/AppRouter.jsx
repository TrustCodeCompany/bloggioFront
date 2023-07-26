// Archivo principal de mis RUTAS DEL PROYECTO

import { Route, Routes } from 'react-router-dom';
import AuthRoutes from '../auth/routes/AuthRoutes';
import { BlogRoutes } from '../blog/routes/BlogRoutes';
// import BlogRoutes from '../journal/routes/JournalRoutes';

const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Registro */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      
      <Route path="/*" element={<BlogRoutes />} />
    </Routes>
  );
};

export default AppRouter;
