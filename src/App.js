import logo from './logo.svg';
import './App.css';
import AddPhotos from './component/AddPhotos';
import SearchPhoto from './component/SearchPhoto';
import DeletePhoto from './component/DeletePhoto';
import ViewAll from './component/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/Add' element={<AddPhotos/>}/>
      <Route path='/Search' element={<SearchPhoto/>}/>
      <Route path='/delete' element={<DeletePhoto/>}/>
      <Route path='/Viewall' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
