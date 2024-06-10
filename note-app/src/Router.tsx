import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ViewPage from './pages/ViewPage/ViewPage';
import WritingPage from './pages/WritingPage/WritingPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/edit" element={<WritingPage variant="edit" />} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/add" element={<WritingPage variant="add" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
