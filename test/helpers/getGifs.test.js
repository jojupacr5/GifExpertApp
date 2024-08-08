/** @jest-environment jsdom */
import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs()", () => {
  test("should return an array of gifs", async () => {
    const gifs = await getGifs("On Punch");
    // console.log(gifs);

    expect(gifs.length).toBeGreaterThan(0);

    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
