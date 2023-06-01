import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Vehicle } from 'src/app/interfaces/Vehicle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle-form',
  templateUrl: './create-vehicle-form.component.html',
  styleUrls: ['./create-vehicle-form.component.css'],
})
export class CreateVehicleFormComponent {
  constructor(
    private vehicleService: VehiclesService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  @Input() form!: FormGroup;
  @Input() title: string = 'Insira os dados do novo veículo!';
  @Input() renavam!: string;
  @Input() btnText: string = 'Criar';
  @Input() vehicle!: Vehicle;
  @Output() changeValue: EventEmitter<any> = new EventEmitter();
  @Output() submitForm: EventEmitter<any> = new EventEmitter();

  handle(): void {
    this.changeValue.emit();
  }

  submitHandler(): void {
    if (this.router.url === '/painel/create') {
      this.vehicleService.createVehicle(this.form.value).subscribe({
        next: () => {
          this.router.navigate(['painel']);
        },
      });
    }
    this.submitForm.emit();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
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
}
