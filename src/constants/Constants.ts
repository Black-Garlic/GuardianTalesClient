export enum PARTY_TYPE {
  SINGLE = "SINGLE",
  TRIPLE = "TRIPLE",
}

export enum STAGE {
  UNIQUE = "유니크",
  RARE_PROMOTION = "레어(승급)",
  RARE = "레어",
}

export enum ELEMENT {
  BASIC = "무",
  LIGHT = "광",
  DARK = "암",
  FIRE = "화",
  WATER = "수",
  EARTH = "지",
}

export enum ROLE {
  WARRIOR = "전사",
  RANGED = "원거리 딜러",
  TANKER = "탱커",
  SUPPORT = "지원가",
}

export enum CHAIN_TYPE {
  ALL = "ALL",
  DOWNED = "다운",
  INJURED = "부상",
  AIRBORNE = "에어본",
}

export enum WEAPON_TYPE {
  ONE_HANDED_SWORD = "한손검",
  TWO_HANDED_SWORD = "양손검",
  RIFLE = "라이플",
  BOW = "활",
  STAFF = "스태프",
  BASKET = "바구니",
  GAUNTLET = "건틀렛",
  CLAW = "클로",
}

export const FILTER_OPTION = {
  keyword: "",
  stage: [
    {
      label: STAGE.UNIQUE,
      value: STAGE.UNIQUE,
      select: false,
    },
    {
      label: STAGE.RARE_PROMOTION,
      value: STAGE.RARE_PROMOTION,
      select: false,
    },
    {
      label: STAGE.RARE,
      value: STAGE.RARE,
      select: false,
    },
  ],
  role: [
    { label: ROLE.WARRIOR, value: ROLE.WARRIOR, select: false },
    { label: ROLE.RANGED, value: ROLE.RANGED, select: false },
    { label: ROLE.TANKER, value: ROLE.TANKER, select: false },
    { label: ROLE.SUPPORT, value: ROLE.SUPPORT, select: false },
  ],
  element: [
    { label: ELEMENT.BASIC, value: ELEMENT.BASIC, select: false },
    { label: ELEMENT.LIGHT, value: ELEMENT.LIGHT, select: false },
    { label: ELEMENT.DARK, value: ELEMENT.DARK, select: false },
    { label: ELEMENT.FIRE, value: ELEMENT.FIRE, select: false },
    { label: ELEMENT.WATER, value: ELEMENT.WATER, select: false },
    { label: ELEMENT.EARTH, value: ELEMENT.EARTH, select: false },
  ],
  weaponType: [
    {
      label: WEAPON_TYPE.ONE_HANDED_SWORD,
      value: WEAPON_TYPE.ONE_HANDED_SWORD,
      select: false,
    },
    {
      label: WEAPON_TYPE.TWO_HANDED_SWORD,
      value: WEAPON_TYPE.TWO_HANDED_SWORD,
      select: false,
    },
    {
      label: WEAPON_TYPE.RIFLE,
      value: WEAPON_TYPE.RIFLE,
      select: false,
    },
    {
      label: WEAPON_TYPE.BOW,
      value: WEAPON_TYPE.BOW,
      select: false,
    },
    {
      label: WEAPON_TYPE.STAFF,
      value: WEAPON_TYPE.STAFF,
      select: false,
    },
    {
      label: WEAPON_TYPE.BASKET,
      value: WEAPON_TYPE.BASKET,
      select: false,
    },
    {
      label: WEAPON_TYPE.GAUNTLET,
      value: WEAPON_TYPE.GAUNTLET,
      select: false,
    },
    {
      label: WEAPON_TYPE.CLAW,
      value: WEAPON_TYPE.CLAW,
      select: false,
    },
  ],
  weaponSkillType: [
    { label: CHAIN_TYPE.DOWNED, value: CHAIN_TYPE.DOWNED, select: false },
    { label: CHAIN_TYPE.INJURED, value: CHAIN_TYPE.INJURED, select: false },
    { label: CHAIN_TYPE.AIRBORNE, value: CHAIN_TYPE.AIRBORNE, select: false },
  ],
  partyBuff: [
    { label: "속성공격력", value: "속성 공격력", select: false },
    { label: "체력", value: "체력", select: false },
    { label: "방어력", value: "방어력", select: false },
    { label: "근접 피해량", value: "근접 피해량", select: false },
    { label: "원거리 피해량", value: "원거리 피해량", select: false },
    { label: "기술 피해량", value: "기술 피해량", select: false },
    { label: "치명타 확률", value: "치명타 확률", select: false },
    { label: "충전 속도", value: "무기 기술 충전 속도", select: false },
  ],
  chainSkillStartType: [
    { label: CHAIN_TYPE.ALL, value: CHAIN_TYPE.ALL, select: false },
    { label: CHAIN_TYPE.DOWNED, value: CHAIN_TYPE.DOWNED, select: false },
    { label: CHAIN_TYPE.INJURED, value: CHAIN_TYPE.INJURED, select: false },
    { label: CHAIN_TYPE.AIRBORNE, value: CHAIN_TYPE.AIRBORNE, select: false },
  ],
  chainSkillEndType: [
    { label: CHAIN_TYPE.DOWNED, value: CHAIN_TYPE.DOWNED, select: false },
    { label: CHAIN_TYPE.INJURED, value: CHAIN_TYPE.INJURED, select: false },
    { label: CHAIN_TYPE.AIRBORNE, value: CHAIN_TYPE.AIRBORNE, select: false },
  ],
};
