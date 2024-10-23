import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, NotFound } from '@/pages';
import Layout from '@/components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
