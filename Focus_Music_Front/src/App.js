import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "../src/Components/pages/HomePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage />}></Route>
        {/* <Route path='/' element={<Outlet />}>
          <Route index element={<HomePage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
