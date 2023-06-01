import { Component } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/Vehicle';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(private vehiclesService: VehiclesService) {
    this.listVehicles();
  }
  vehicles: Vehicle[] = [];

  listVehicles(): void {
    this.vehiclesService.getAllVehicles().subscribe(
      (vehicles) => {
        this.vehicles = vehicles;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
