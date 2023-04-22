import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/home.jsx";
import Predict from "./pages/predict.jsx";
import NotFound from "./pages/404.jsx";
import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/predict" element={<Predict/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}
const renderApp = () => root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

renderApp()
