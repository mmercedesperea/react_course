import { retornaArreglo } from "../../base/07-array";

describe("test 07-deses-arr", () => {
  test("retornaArreglo should return a array", () => {
    const arrMock = ["ABC", 123];
    const array = retornaArreglo();
    expect(array).toEqual(arrMock);
  });

  test("retornaArreglo should return a string and number", () => {
    const [letters, number] = retornaArreglo();

    expect(letters).toBe("ABC");
    expect(typeof letters).toBe("string");
    expect(number).toBe(123);
    expect(typeof number).toBe('number');
  });
});

