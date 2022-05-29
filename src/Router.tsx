import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';
import { HomePage, UserById } from 'pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/user/:id' element={<UserById />} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}