import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ListComponent } from './components/list/list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { CreateVehicleFormComponent } from './components/create-vehicle-form/create-vehicle-form.component';
import { UpdateVehicleFormComponent } from './components/update-vehicle-form/update-vehicle-form.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    CreateUserFormComponent,
    VehicleDetailsComponent,
    CreateVehicleFormComponent,
    UpdateVehicleFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
