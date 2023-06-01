import { Component } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/Vehicle';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css'],
})
export class VehicleDetailsComponent {
  constructor(
    private service: VehiclesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getDetails();
  }
  vehicle!: Vehicle;

  getDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getSingleVehicle(id as string).subscribe((vehicle) => {
      this.vehicle = vehicle;
    });
  }

  delete(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.remove(id as string).subscribe({
      next: () => {
        this.router.navigate(['/painel']);
      },
    });
  }
}
