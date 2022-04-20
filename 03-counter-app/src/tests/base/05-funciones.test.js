import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Test 05-funciones", () => {
  test("getUser should return a User", () => {
    const UserMock = { uid: "ABC123", username: "El_Papi1502" };

    const user = getUser();
    // para evaluar objetos se usa el toEqual
    expect(user).toEqual(UserMock);
  });

  test("getUsuarioActivo should return a User", () => {
    const name = "Frank";
    const UserMock = { uid: "ABC567", username: name };

    const user = getUsuarioActivo(name);
    expect(user).toEqual(UserMock);
  });
});
