import { capitalize, reverse, calculator, caesarCipher, analyzeArray } from "./practice";

test('capitalize first letter', () => {
    expect(
        capitalize('string')
        ).toMatch(/^[A-Z][a-z]*$/);
});

test('reverse string', () => {
    expect(
        reverse('string')
    ).toBe('gnirts')
});

test('calculator containing functions', () => {
    expect(
        calculator
    ).toHaveProperty('add');
    expect(
        calculator
    ).toHaveProperty('subtract');
    expect(
        calculator
    ).toHaveProperty('divide');
    expect(
        calculator
    ).toHaveProperty('multiply');
});

test('calculator functions', () => {
    expect(
        calculator.add(1, 2)
    ).toBe(3);
    expect(
        calculator.subtract(4, 2)
    ).toBe(2);
    expect(
        calculator.divide(9, 3)
    ).toBe(3);
    expect(
        calculator.multiply(4, 4)
    ).toBe(16)
});

test('string ciphering and dicephering', () => {
    expect(
        caesarCipher('mateusz')
    ).toBe('pdwhxvc');
    expect(
        caesarCipher('this is just another test')
    ).toBe('wklv lv mxvw dqrwkhu whvw');
    expect(
        caesarCipher('look, we need some punctuation')
    ).toBe('orrn, zh qhhg vrph sxqfwxdwlrq');
    expect(
        caesarCipher('some UpperCase, TOO!')
    ).toBe('vrph Xsshu`dvh, WRR!')
});

test('analyzing array of numbers', () => {
    expect(
        analyzeArray([1, 8, 3, 4, 2, 6])
    ).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});