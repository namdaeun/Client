import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WritingPage from './pages/WritingPage/WritingPage';
import EditPage from './pages/EditPage/EditPage';
import MainPage from './pages/MainPage/MainPage';
import ViewPage from './pages/ViewPage/ViewPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/edit" element={<WritingPage variant='edit'/>} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/add" element={<WritingPage variant='add'/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
