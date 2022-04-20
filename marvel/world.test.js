const World = require("./world");

describe("World Tests", () => {
  let newWorld;
  newWorld = new World("Marvel Universe");
  test("Has the Universe a name?", () => {
    expect(newWorld.getTitle()).toBe("Marvel Universe");
  });

  test("Can I rename the universe?", () => {
    newWorld.setTitle("Alice Wunderland");
    expect(newWorld.getTitle()).toBe("Alice Wunderland");
  });
});
