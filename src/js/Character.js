class Character {
  constructor(attack = 100, distance = 1, stoned = false) {
    this.attack = attack;
    this.distance = distance;
    this.stoned = stoned;
  }

  getAttack() {
    let distanceModifier = 1 - 0.1 * (this.distance - 1);
    let attack = this.attack * distanceModifier;

    if (this.stoned) {
      let stonedModifier = Math.log2(this.distance) * 5;
      attack -= stonedModifier;
    }

    return Math.round(attack);
  }

  setAttack(attack) {
    this.attack = attack;
  }

  getStoned() {
    return this.stoned;
  }

  setStoned(value) {
    if (typeof value === 'boolean') {
      this.stoned = value;
    } else {
      throw new Error('stoned should be a boolean value');
    }
  }
}

export default Character;