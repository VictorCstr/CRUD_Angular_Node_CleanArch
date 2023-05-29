import { randomUUID } from "crypto";

enum Role {
  ADMIN = "ADMIN",
  GUEST = "GUEST",
}

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
