
it("should calculate the monthly rate correctly", function () {
  const values = {
    amount: 10000,
    years: 30,
    rate: 7.7,
  }
  expect(calculateMonthlyPayment(values)).toEqual('71.30');
})


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 350000,
    years: 30,
    rate: 7.7,
  }
  expect(calculateMonthlyPayment(values)).toEqual("2495.36");
});

it("should not return if math is wrong", function() {
  const values = {
    amount: 350000,
    years: 30,
    rate: 7.7,
  }
  expect(calculateMonthlyPayment(values)).not.toEqual("245.36");
});

/// etc
