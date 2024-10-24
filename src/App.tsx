import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, NotFound } from '@/pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
