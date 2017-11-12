import { calculate } from './calculate';
test('return 1', () => {
    expect(calculate(2)).toBe(1);
});
test('return 3', () => {
    expect(calculate(0)).toBe(3);
});