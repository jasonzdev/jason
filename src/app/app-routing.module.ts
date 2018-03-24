import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  {
      path: 'ok',
      component: LoginComponent,
  },
  // otherwise redirect to home
  { 
    path: '**', 
    component: LoginComponent 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
