import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "./routes";

const AppRouter = () => {
    return (
        <div className='page'>
            <Routes>
                {routes.map((el,index) => (
                    <Route
                        key = {`${el}_${index}`}
                        path={el.src}
                        element={<el.element/>}
                    />))}
            </Routes>
        </div>
    );
};

export default AppRouter;