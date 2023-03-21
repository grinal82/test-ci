export function healthStatus(hero) {
  if (hero.health < 15) {
    return 'critical';
  }
  if (hero.health >= 15 || hero.health <= 50) {
    return 'wounded';
  }
  return 'healthy';
}

export function sortedHealth(heroes) {
  return heroes.sort((a, b) => (a.health < b.health ? 1 : -1));
}
