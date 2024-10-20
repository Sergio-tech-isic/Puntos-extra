import spirals from "../library/spirals";
describe('spirals', () => {
    test('should return 1 for a 1x1 matrix', () => {
        expect(spirals(1, 1)).toBe(1);
    });

    test('should return 5 for a 2x2 matrix', () => {
        expect(spirals(2, 2)).toBe(5);
    });

    test('should return 19 for a 3x3 matrix', () => {
        expect(spirals(3, 3)).toBe(19);
    });

    test('should return correct value for a 4x4 matrix', () => {
        expect(spirals(4, 4)).toBe(69);
    });

    test('should return correct value for a 5x5 matrix', () => {
        expect(spirals(5, 5)).toBe(251);
    });

    test('should return correct value for a 2x3 matrix', () => {
        expect(spirals(2, 3)).toBe(9);
    });

    test('should return correct value for a 3x2 matrix', () => {
        expect(spirals(3, 2)).toBe(9);
    });

    test('should return correct value for a 4x3 matrix', () => {
        expect(spirals(4, 3)).toBe(34);
    });

    test('should return correct value for a 3x4 matrix', () => {
        expect(spirals(3, 4)).toBe(34);
    });
});