import { ReactNode } from "react";
import Header from "@components/Base/Header";
import Footer from "@components/Base/Footer";

const MainTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"overflow-hidden bg-sub-1"}>
      <Header />
      <div className={"flex flex-col"}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainTemplate;
