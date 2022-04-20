import { getHeroeById ,getHeroesByOwner} from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("test 08-imp-exp", () => {
  test("getHeroeById should return a heroe by id", () => {
    const id = 3;
    // const mockHero = {
    //   id: 3,
    //   name: "Superman",
    //   owner: "DC",
    // };
    const heroeData= heroes.find(h=>h.id===id);
    const heroe = getHeroeById(id);

    expect(heroe).toEqual(heroeData);
  });

  test("getHeroeById should return undefined if heroe does not exists", () => {
    const id = 43;
    const hero = getHeroeById(id);

    expect(hero).toBe(undefined);
  });

  test("getHeroesByOwner should return a heroe by Owner", () => {
    const owner = 'DC';
    const mockHeros = [{"id": 1, "name": "Batman", "owner": "DC"}, {"id": 3, "name": "Superman", "owner": "DC"}, {"id": 4, "name": "Flash", "owner": "DC"}]
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toEqual(mockHeros);
  });

  test("getHeroesByOwner should return a array length equal", () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });
});

