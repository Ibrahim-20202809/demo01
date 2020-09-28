import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'home', 
      component: HomeComponent 
    },
    // {
    //   path: 'about',
    //   component: AboutComponent
    // },
    // { path: 'dashboard',
    //   component: DashboardComponent
    // }
  ];
  export default appRoutes;