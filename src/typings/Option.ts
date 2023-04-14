export interface FilterOption {
  keyword: string;
  stage: Option[];
  role: Option[];
  element: Option[];
  weaponType: Option[];
  weaponSkillType: Option[];
  partyBuff: Option[];
  chainSkillStartType: Option[];
  chainSkillEndType: Option[];
}

export interface Option {
  label: string;
  value: string;
  select: boolean;
}
