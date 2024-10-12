import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from '../pages/Start'
import Quiz from '../pages/Quiz/Quiz'
import Result from '../pages/Result'
function SimpleRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Start />} />
                <Route path='/question/:id' element={<Quiz />} />
                <Route path='/results' element={<Result />} />

            </Routes>

        </Router>
    )
}
export default SimpleRouter