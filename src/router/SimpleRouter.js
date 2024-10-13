import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Start = React.lazy(() => import('../pages/Start'));
const Quiz = React.lazy(() => import('../pages/Quiz/Quiz'));
const Result = React.lazy(() => import('../pages/Result'));
const NotFound = React.lazy(() => import('../pages/page404'));


function SimpleRouter() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<Start />} />
                    <Route path='/question/:id' element={<Quiz />} />
                    <Route path='/results' element={<Result />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    );
}
export default SimpleRouter;
