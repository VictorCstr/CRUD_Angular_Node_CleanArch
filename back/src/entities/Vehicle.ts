import { randomUUID } from "crypto";

export class Vehicle {
  readonly id: string;
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: number;

  constructor(props: Omit<Vehicle, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = randomUUID();
    }
  }
}
