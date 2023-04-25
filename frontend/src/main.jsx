import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/home";
import Predict from "./pages/predict";
import NotFound from "./pages/404";
import './styles/global.css'
import {ChakraProvider} from "@chakra-ui/react";
import chakraTheme from '../chakraTheme'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

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
    <ChakraProvider theme={chakraTheme}>
        <BrowserRouter>
            <App/>
            <ToastContainer />
        </BrowserRouter>
    </ChakraProvider>
)

renderApp()
