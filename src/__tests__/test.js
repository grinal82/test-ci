import { healthStatus, sortedHealth } from '../js/app';

test('ShouldCalcHealth', () => {
  const input = { name: 'мечник', health: 10 };
  const expected = 'critical';
  const received = healthStatus(input);
  expect(received).toBe(expected);
});

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
