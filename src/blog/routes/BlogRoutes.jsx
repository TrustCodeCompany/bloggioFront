import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage, CategoriesPage, BlogPage } from '../pages';

export const BlogRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
