import { Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home/';
import { Post } from './pages/Post';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Post/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}

export { Router };
