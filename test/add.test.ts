const { add } = require("../src/add");

test("adding to numbers", () => {
     expect(add(1, 2)).toBe(3);
});
