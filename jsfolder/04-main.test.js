import { isNegative } from "./04-main";
describe('isNegative()', function () {
    it('should return true for negative numbers', function () {
        expect(isNegative(-1)).toBe(true);
    });
    it('should return false for positive numbers', function () {
        expect(isNegative(1)).toBe(false);
        expect(isNegative(3)).toBe(false);
    });
});
