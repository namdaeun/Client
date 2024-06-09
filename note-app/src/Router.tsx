import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPage from './pages/AddPage/AddPage';
import EditPage from './pages/EditPage/EditPage';
import MainPage from './pages/MainPage/MainPage';
import ViewPage from './pages/ViewPage/ViewPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
