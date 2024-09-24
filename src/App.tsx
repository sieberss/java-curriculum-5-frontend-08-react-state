import {Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Welcome from './pages/Welcome';
import RandMGallery from './pages/RandMGallery';

export default function App() {

    return (
        <>
            <ul>
                <li>
                    <Link to={'/Welcome'}>Welcome</Link>
                </li>
                <li>
                    <Link to={'/characters'}>Rick and Morty Characters</Link>
                </li>
            </ul>
            <Routes>
                <Route path={'/Welcome'} element={<Welcome/>}></Route>
                <Route path={'/characters'} element={<RandMGallery/>}></Route>
            </Routes>
        </>
    );
}
