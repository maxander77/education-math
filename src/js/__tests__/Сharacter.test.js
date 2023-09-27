import Character from "../Character";

test('should create a charcter with default values', () => {
  const charcter = new Character();

  expect(charcter.attack).toBe(100);
  expect(charcter.distance).toBe(1);
  expect(charcter.stoned).toBe(false);
});

test('should calculate attack without stoning', () => {
  const charcter = new Character(100, 3, false);

  expect(charcter.getAttack()).toBe(80);
});

test('should calcute attack with stoning', () => {
  const charcter = new Character(100, 3 ,true);

  expect(charcter.getAttack()).toBe(72);
});

test('should set a new attack value', () => {
  const charcter = new Character(100, 1, false);

  charcter.setAttack(120);
  expect(charcter.attack).toBe(120);
});

test('getStoned should return the value of stoned', () => {
  const charcter = new Character();

  expect(charcter.getStoned()).toBe(false);
  charcter.setStoned(true);
  expect(charcter.getStoned()).toBe(true);
});

test('setStoned should set value of stoned', () => {
  const charcter = new Character();

  charcter.setStoned(true);
  expect(charcter.getStoned()).toBe(true);
  charcter.setStoned(false);
  expect(charcter.getStoned()).toBe(false);
});