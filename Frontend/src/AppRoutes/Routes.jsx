import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemCard from '../Components/ItemCard/ItemCard'
import App from '../App'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element=<App /> />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
