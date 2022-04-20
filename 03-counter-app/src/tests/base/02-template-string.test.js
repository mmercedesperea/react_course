import { getSaludo } from "../../base/02-template-string";

describe("Test 02-template-string", () => {
  test("getSaludo should return a name", () => {
    const name = "Pepi";

    const saludo = getSaludo(name);

    expect(saludo).toBe("Hola " + name);
  });

  test("getSaludo should return a Hola Frank", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Frank");
  });
});
