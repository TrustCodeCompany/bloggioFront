import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage';
import { BlogPage } from '../pages/BlogPage';

export const BlogRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
