import HeroPartyTripleRow from "@components/Hero/HeroList/HeroParty/HeroPartyTriple/HeroPartyTripleRow";

const HeroPartyTriple = () => {
  return (
    <div className={"flex flex-col mt-2"}>
      <HeroPartyTripleRow />
      <HeroPartyTripleRow />
      <HeroPartyTripleRow />
    </div>
  );
};

export default HeroPartyTriple;
