import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Images from '../components/Images/Images';
import ImageDetails from '../components/ImageDetails/ImageDetails';
import PageNotFound from '../components/PageNotFound/PageNotFound';


function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Images/>}/>
        <Route path='/photos/:id' element={<ImageDetails/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  );
}

export default CustomRoutes;
