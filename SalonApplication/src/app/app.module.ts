import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { CustomerComponent } from './component/customer/customer.component';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { PaymentComponent } from './component/payment/payment.component';
import { OrderComponent } from './component/order/order.component';
import { SalonserviceComponent } from './component/salonservice/salonservice.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './component/admin/admin.component';
import { ViewAllAppointmentsComponent } from './component/admin/view-all-appointments/view-all-appointments.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { FooterComponent } from './component/footer/footer.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { SignoutComponent } from './component/signout/signout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CustomerComponent,
    AppointmentComponent,
    PaymentComponent,
    OrderComponent,
    SalonserviceComponent,
    RegistrationComponent,
    HeaderComponent,
    AdminComponent,
    ViewAllAppointmentsComponent,
    DashboardComponent,
    FooterComponent,
    ChangePasswordComponent,
    SignoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
