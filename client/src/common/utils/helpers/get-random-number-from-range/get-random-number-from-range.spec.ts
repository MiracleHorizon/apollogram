import { getRandomNumberFromRange } from './get-random-number-from-range'

describe(`Функция getRandomNumberFromRange должна вернуть случайно значение
в передаваемом диапазоне. Полученное значение должно быть целым числом`, () => {
  test('Первый кейс', () => {
    const MIN = 0
    const MAX = 0
    const value = getRandomNumberFromRange(MIN, MAX)

    expect(value).toEqual(0)
    expect(value).not.toBeLessThan(MAX)
    expect(value).not.toBeGreaterThan(MAX)
    expect(value).toBeLessThanOrEqual(MIN)
    expect(value).toBeGreaterThanOrEqual(MAX)
    expect(Number.isInteger(value)).toBeTruthy()
  })
  test('Второй кейс', () => {
    const MIN = -2
    const MAX = 3
    const value = getRandomNumberFromRange(MIN, MAX)

    expect(value).not.toBeLessThan(MIN)
    expect(value).not.toBeGreaterThan(MAX)
    expect(Number.isInteger(value)).toBeTruthy()
  })
  test('Третий кейс', () => {
    const MIN = 19
    const MAX = 48
    const value = getRandomNumberFromRange(MIN, MAX)

    expect(value).not.toBeLessThan(MIN)
    expect(value).not.toBeGreaterThan(MAX)
    expect(Number.isInteger(value)).toBeTruthy()
  })
  test('Четвертый кейс', () => {
    const MIN = 37
    const MAX = 37
    const value = getRandomNumberFromRange(MIN, MAX)

    expect(value).not.toBeLessThan(MIN)
    expect(value).not.toBeGreaterThan(MAX)
    expect(Number.isInteger(value)).toBeTruthy()
    expect(value).toBe(MIN)
    expect(value).toBe(MAX)
  })
})
