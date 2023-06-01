import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/interfaces/Vehicle';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-update-vehicle-form',
  templateUrl: './update-vehicle-form.component.html',
  styleUrls: ['./update-vehicle-form.component.css'],
})
export class UpdateVehicleFormComponent {
  title: string = 'Atualização de dados do veículo!';
  btnText: string = 'Atualizar';

  form!: FormGroup;
  vehicle!: Vehicle;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehiclesService,
    private formBuilder: FormBuilder
  ) {
    this.loadData();
    this.createForm();
  }

  loadData(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.vehicleService.getSingleVehicle(id as string).subscribe({
      next: (vehicle) => {
        this.vehicle = vehicle;
      },
    });
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      modelo: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      ano: ['', [Validators.required]],
      placa: [
        '',
        [Validators.required, Validators.maxLength(7), Validators.minLength(7)],
      ],
      chassi: [
        '',
        [
          Validators.required,
          Validators.maxLength(17),
          Validators.minLength(17),
        ],
      ],
      renavam: [
        '',
        [
          Validators.required,
          Validators.maxLength(11),
          Validators.minLength(11),
        ],
      ],
    });
  }

  onSubmitForm(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.vehicleService.update(id as string, this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/painel']);
      },
    });
  }

  onChangeValue(): void {
    this.loadData();
    this.form.get('marca')?.setValue(this.vehicle.marca);
    this.form.get('ano')?.setValue(this.vehicle.ano);
    this.form.get('modelo')?.setValue(this.vehicle.modelo);
    this.form.get('placa')?.setValue(this.vehicle.placa);
    this.form.get('renavam')?.setValue(this.vehicle.renavam);
    this.form.get('chassi')?.setValue(this.vehicle.chassi);
  }
}
