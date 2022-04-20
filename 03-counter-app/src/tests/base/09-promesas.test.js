import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Test 09-promesas", () => {
  test("getHeroeByIdAsync should return a Heroe async", (done) => {
    const id = 3;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[2]);

      // Done is included to say that the test is over and no further information is expected.
      done();
    });
  });

  test("getHeroeByIdAsync should return an error", (done) => {
    const id = 3333;
    getHeroeByIdAsync(id).catch((error) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
