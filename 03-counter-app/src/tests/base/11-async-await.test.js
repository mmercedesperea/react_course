import { getImagen } from "../../base/11-async-await";

describe("Test async-await", () => {
  test("getImagen should return an url", async () => {
    const url = await getImagen();

    expect(typeof url).toBe("string");
    expect(url.includes("https://")).toBe(true);
  });
});
