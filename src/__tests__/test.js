import { healthStatus, sortedHealth } from '../js/app';

test('ShouldCalcHealth', () => {
  const input = { name: 'мечник', health: 30 };
  const expected = 'wounded';
  const received = healthStatus(input);
  expect(received).toBe(expected);
});

test.each([
  [{ name: 'мечник', health: 10 }, 'critical'],
  [{ name: 'маг', health: 100 }, 'healthy'],
  [{ name: 'лучник', health: 80 }, 'wounded'],
])(
  ('Health for hero'),
  (hero, expected) => {
    const result = healthStatus(hero);

    expect(result).toBe(expected);
  },
);

test('SortedHealth', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const received = sortedHealth(input);
  expect(received).toEqual(expected);
});
