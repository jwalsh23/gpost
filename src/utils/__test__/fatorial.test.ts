import factorial from '../factorial'


it("should return 1 when called with 1", () => {
    expect(factorial(1)).toBe(1)
});
it("Should return 1 when called with 0", () => {
    expect(factorial(0)).toBe(1)
})
it("should return 120 when called with 5", () => {
    expect(factorial(5)).toBe(120);
})