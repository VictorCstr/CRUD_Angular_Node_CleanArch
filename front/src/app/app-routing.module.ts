import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ListComponent } from './components/list/list.component';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { CreateVehicleFormComponent } from './components/create-vehicle-form/create-vehicle-form.component';
import { UpdateVehicleFormComponent } from './components/update-vehicle-form/update-vehicle-form.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'user', component: CreateUserFormComponent },
  { path: 'painel', component: ListComponent },
  { path: 'painel/get/:id', component: VehicleDetailsComponent },
  { path: 'painel/create', component: CreateVehicleFormComponent },
  { path: 'painel/update/:id', component: UpdateVehicleFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
