import { randomUUID } from "crypto";

export type Role = "ADMIN" | "GUEST";

export class User {
  readonly id: string;
  name: string;
  user: string;
  password: string;
  role: Role;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = randomUUID();
    }
  }
}
