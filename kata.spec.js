const getOrder = require("./kata");

describe("Solution", function () {
  it("Example Tests", function () {
    expect(
      getOrder(
        "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
      )
    ).toBe(
      "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
    );
  });

  it("Example Tests 2", function () {
    expect(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich")).toBe(
      "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke"
    );
  });
});
