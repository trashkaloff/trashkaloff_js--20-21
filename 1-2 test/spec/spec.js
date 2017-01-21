var calc = require('../js/script.js');

describe("Pow testing", function() {
  it("Positive functional 1", function() {
    var result;

    result = calc.pow(2,2);

    expect(result).toBe(4);
  });
  it("Negative functional 1", function() {
    var result;

    result = calc.pow(2,0);

    expect(result).toBe(1);
  });
  it("Negative functional 2", function() {
    var result;

    result = calc.pow(2,-1);

    expect(result).toEqual(0.5);
  });
  it("Negative functional 3", function() {
    var result;

    result = calc.pow(-2,2);

    expect(result).toBeGreaterThan(0);
  });


});
