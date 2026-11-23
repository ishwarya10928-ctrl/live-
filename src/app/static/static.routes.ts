import { Routes } from "@angular/router";
import { StaticLayouts } from "../layouts/static-layouts/static-layouts";
import { Home } from "./home/home";
import { Product } from "./product/product";
import { Contact } from "./contact/contact";
import { Aboutus } from "./aboutus/aboutus";


export const routes: Routes = [

    {
        path:'',
        component:StaticLayouts,
        children:[
            {
                path:'home',
                component:Home,
            },
            {
                path:'product',
                component:Product,
            },
            {
                path:'contact',
                component:Contact,
            },
            {
                path:'about',
                component:Aboutus,
            },
            {
                path:'',
                redirectTo:'home',
                pathMatch:'full',
            }
        ]
    }
]