export interface ShootTheBurglarData {
  // burglars: with burglar id
  // princesses: with princess id
  rounds: ShootTheBurglarRound[];
}

export interface ShootTheBurglarRound {
  reveal: ShootTheBurglarReveal;
  timeUntilReveal: number; // time until burglar/princess reveals
  stayTime: number; // time until burglar/princess disappears
}

export interface ShootTheBurglarReveal {
  role: string; // burglar or princess
  playerFireId: string;
}
