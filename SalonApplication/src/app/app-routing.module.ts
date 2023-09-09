import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { CustomerComponent } from './component/customer/customer.component';
import { OrderComponent } from './component/order/order.component';
import { PaymentComponent } from './component/payment/payment.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { SalonserviceComponent } from './component/salonservice/salonservice.component';
import { HeaderComponent } from './component/header/header.component';
import { AdminComponent } from './component/admin/admin.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { ViewAllAppointmentsComponent } from './component/admin/view-all-appointments/view-all-appointments.component';
import { SignoutComponent } from './component/signout/signout.component';
const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  { path: 'home',
  component: HeaderComponent ,
  children:[
    {
      path: 'login',
      component: LoginComponent 
    },
    {
      path: 'changePassword',
      component: ChangePasswordComponent 
    },
    {
      path: 'signout',
      component: SignoutComponent
    },
    {
      path: 'service',
      component: SalonserviceComponent 
    },
    { path: 'appointment',
    component: AppointmentComponent 
    },
    { path: 'customer',
    component: CustomerComponent 
    },
  ]
  },
  { path: 'login',
    component: LoginComponent
  },
  
  { path: 'order',
  component: OrderComponent 
  },
  { path: 'payment',
  component: PaymentComponent 
  },
  { path: 'registration',
  component: RegistrationComponent 
  },
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path: 'view-allAppointment',
        component: ViewAllAppointmentsComponent 
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
