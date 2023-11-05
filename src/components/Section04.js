import { Link } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import BoxComp from "./BoxComp";
const Section04 = () => {
  return (
    <div className="container1">
      <Link to="/">
        <Button fillMode="outline" themeColor={"primary"} className="sec-btn">
          Back to Section
        </Button>
      </Link>
      <BoxComp/>
    </div>
  );
};
export default Section04;
