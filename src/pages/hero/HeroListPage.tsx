import MainTemplate from "@components/Base/MainTemplate";
import { useState } from "react";
import HeroPartySingle from "@components/Hero/HeroList/HeroParty/HeroPartySingle/HeroPartySingle";
import HeroPartyTriple from "@components/Hero/HeroList/HeroParty/HeroPartyTriple/HeroPartyTriple";
import HeroSearchList from "@components/Hero/HeroList/HeroSearchList/HeroSearchList";
import HeroPartyConfig from "@components/Hero/HeroList/HeroParty/HeroPartyConfig";

const HeroListPage = () => {
  const [partyConfig, setPartyConfig] = useState<string>("SINGLE");

  return (
    <MainTemplate>
      <div className={"flex flex-row flex-1"}>
        <div className={"flex flex-col flex-1"}>
          <HeroPartyConfig
            partyConfig={partyConfig}
            setPartyConfig={setPartyConfig}
          />

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
