import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CounterComponent } from './counter/counter.component';
import { SecurityComponent } from './security/security.component';
import { ApidataComponent } from './apidata/apidata.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { InternauluzationComponent } from './internauluzation/internauluzation.component';



const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'login', component:LoginComponent},
  { path:'layout', component:LayoutComponent, 
   children:[
    { path:'dashboard', component:DashboardComponent},
    { path:'store', component:CounterComponent},
    { path:'security', component:SecurityComponent},
    { path:'apidata', component:ApidataComponent},
    { path:'lang-trans', component:InternauluzationComponent}
   ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
