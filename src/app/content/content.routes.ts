import { Routes } from "@angular/router";
import { Dashboard } from "./dashboard/dashboard";
import { Browser } from "./browser/browser";
import { Profile } from "./profile/profile";
import { Setting } from "./setting/setting";
import { ContentLayout } from "../layouts/static-layouts/content-layout/content-layout";

export const routes:Routes=[
    {
        path:'',
        component:ContentLayout,
        children:[
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'browser',
        component: Browser,
      },
      {
        path: 'profile',
        component: Profile,
      },
      {
        path: 'setting',
        component: Setting,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
