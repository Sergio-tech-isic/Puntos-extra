import factorsInArrays from '../library/factors-in-arrays';

describe('factorsInArrays', () => {
    test('should return 4 for arrays [2, 4] and [32, 64, 128]', () => {
        const a = [2, 4];
        const b = [32, 64, 128];
        expect(factorsInArrays(a, b)).toBe(4);
    });

    test('should return 2 for arrays [3, 9] and [18, 36, 72]', () => {
        const a = [3, 9];
        const b = [18, 36, 72];
        expect(factorsInArrays(a, b)).toBe(2);
    });

    test('should return 1 for arrays [1] and [1]', () => {
        const a = [1];
        const b = [1];
        expect(factorsInArrays(a, b)).toBe(1);
    });

    test('should return 2 for arrays [1] and [2]', () => {
        const a = [1];
        const b = [2];
        expect(factorsInArrays(a, b)).toBe(2);
    });

    test('should return 1 for arrays [2, 3] and [6, 12, 24]', () => {
        const a = [2, 3];
        const b = [6, 12, 24];
        expect(factorsInArrays(a, b)).toBe(1);
    });

    test('should return 3 for arrays [2, 4] and [16, 32, 64]', () => {
        const a = [2, 4];
        const b = [16, 32, 64];
        expect(factorsInArrays(a, b)).toBe(3);
    });

    test('should return 0 for arrays [2, 3] and [5, 7]', () => {
        const a = [2, 3];
        const b = [5, 7];
        expect(factorsInArrays(a, b)).toBe(0);
    });

    //very large test
    test('should return 16 for arrays [1, 10,100,1000,10000] and [100000000,1000000]', () => {
        const a = [1, 10,100,1000];
        const b = [100000000,1000000];
        expect(factorsInArrays(a, b)).toBe(16);
    });
});