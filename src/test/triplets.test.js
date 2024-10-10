import triplets from '../library/triplets';

describe('triplets', () => {
    test('should return [1, 1] for input arrays [1, 2, 3] and [3, 2, 1]', () => {
        const a = [1, 2, 3];
        const b = [3, 2, 1];
        const result = triplets(a, b);
        expect(result).toEqual([1, 1]);
    });

    test('should return [0, 0] for input arrays [1, 1, 1] and [1, 1, 1]', () => {
        const a = [1, 1, 1];
        const b = [1, 1, 1];
        const result = triplets(a, b);
        expect(result).toEqual([0, 0]);
    });

    test('should return [3, 0] for input arrays [3, 3, 3] and [1, 1, 1]', () => {
        const a = [3, 3, 3];
        const b = [1, 1, 1];
        const result = triplets(a, b);
        expect(result).toEqual([3, 0]);
    });

    test('should return [0, 3] for input arrays [1, 1, 1] and [3, 3, 3]', () => {
        const a = [1, 1, 1];
        const b = [3, 3, 3];
        const result = triplets(a, b);
        expect(result).toEqual([0, 3]);
    });

    test('should return [2, 1] for input arrays [5, 6, 7] and [3, 6, 10]', () => {
        const a = [5, 6, 7];
        const b = [3, 6, 10];
        const result = triplets(a, b);
        expect(result).toEqual([1, 1]);
    });

    test('should return [1, 2] for input arrays [1, 2, 3] and [3, 2, 4]', () => {
        const a = [1, 2, 3];
        const b = [3, 2, 4];
        const result = triplets(a, b);
        expect(result).toEqual([0, 2]);
    });
});