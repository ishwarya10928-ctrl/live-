import { Routes } from "@angular/router";
import { StaticLayouts } from "../layouts/static-layouts/static-layouts";
import { Login } from "./login/login";
import { Register } from "./register/register";
import { ForgotPassword } from "./forgot-password/forgot-password";
import { UpdatePassword } from "./update-password/update-password";

export const routes:Routes=[
    {
        path:'',
        component:StaticLayouts,
        children:[
            {
                path:'login',
                component:Login,
            },
            {
                path:'register',
                component:Register,
            },
            {
                path:'forgotpassword',
                component:ForgotPassword,
            },
            {
                path:'updatepassword',
                component:UpdatePassword,
            },
            {
                path:'',
                redirectTo:'login',
                pathMatch:'full'
            }
        ]
    }
]