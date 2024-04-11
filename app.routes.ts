import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './src/app/components/home/home.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
   },
];

export const RoutesRoutes = RouterModule.forChild(routes);
