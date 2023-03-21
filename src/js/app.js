export function healthStatus(hero) {
  if (hero.health > 80) {
    return 'healthy';
  } if (hero.health >= 15 && hero.health <= 80) {
    return 'wounded';
  } return 'critical';
}

export function sortedHealth(heroes) {
  return heroes.sort((a, b) => (a.health < b.health ? 1 : -1));
}
