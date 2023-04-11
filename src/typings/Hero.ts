export interface Hero {
  heroInfoId: number;
  name: string;
  englishName: string;
  stage: string;
  role: string;
  element: string;
  weaponInfo: Weapon;
  weaponPhase: string;
  weaponType: string;
  partyBuff: string;
  firstNormalAttackName: string;
  firstNormalAttackDescription: string;
  secondNormalAttackName?: string;
  secondNormalAttackDescription?: string;
  chainSkillName: string;
  chainSkillStartType: string;
  chainSkillEndType: string;
  chainSkillDamage: number;
  chainSkillDamageType: string;
  chainSkillAdditionalEffect: string;
  specialAbilityName: string;
  specialAbilityDescription: string;
}

export interface Weapon {
  name: string;
  weaponType: string;
  element: string;
  weaponOption: string;
  skillName: string;
  chainType: string;
  skillDamage: number;
  skillRegenTime: number;
  skillAdditionalEffect?: string;
}
