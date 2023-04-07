import MainTemplate from "@components/Base/MainTemplate";
import { useState } from "react";
import HeroPartySingle from "@components/Hero/HeroList/HeroParty/HeroPartySingle";
import HeroPartyTriple from "@components/Hero/HeroList/HeroParty/HeroPartyTriple";
import HeroSearchList from "@components/Hero/HeroList/HeroSearchList/HeroSearchList";

const HeroListPage = () => {
  const [partyConfig, setPartyConfig] = useState<string>("SINGLE");

  return (
    <MainTemplate>
      <div className={"flex flex-row flex-1"}>
        <button className={"flex-1"} onClick={() => setPartyConfig("SINGLE")}>
          파티 1개
        </button>
        <button className={"flex-1"} onClick={() => setPartyConfig("TRIPLE")}>
          파티 3개
        </button>
      </div>
      <div className={"flex flex-row flex-1"}>
        <div className={"flex-1"}>
          {partyConfig === "SINGLE" ? <HeroPartySingle /> : <HeroPartyTriple />}
        </div>
        <div className={"flex-1"}>
          <HeroSearchList />
        </div>
      </div>
    </MainTemplate>
  );
};

export default HeroListPage;
