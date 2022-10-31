import {IRoute} from "../Types/Router";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

export const routes:IRoute[] = [
    {src: '/' , exact: 'true', element: HomePage},
    {src: 'address/', exact: 'true', element: SearchPage},
    {src: '*', exact: 'true', element:  NotFoundPage}
]