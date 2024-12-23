import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CountriesPage from "./pages/CountriesPage";
import CountryInfoPage from "./pages/CountryInfoPage";

const router = createBrowserRouter([
    {
        path:'', element: <MainLayout/>, children:[
            {
                path:'', element:<CountriesPage/>
            },
            {
                path: ':countryCode', element: <CountryInfoPage/>
            }
        ]
    }
])

export {
    router
}