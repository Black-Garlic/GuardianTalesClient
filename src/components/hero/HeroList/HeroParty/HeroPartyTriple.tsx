import HeroPartySingle from "@components/Hero/HeroList/HeroParty/HeroPartySingle";

const HeroPartyTriple = () => {
  return (
    <div className={"flex flex-col"}>
      <HeroPartySingle />
      <HeroPartySingle />
      <HeroPartySingle />
    </div>
  );
};

export default HeroPartyTriple;
