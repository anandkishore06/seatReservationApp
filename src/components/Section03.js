import { Button } from "@progress/kendo-react-buttons";
import { Link } from "react-router-dom";
const Section03 = () => {
  return (
    <div className="container1">
      <Link to="/">
        <Button fillMode="outline" themeColor={"primary"} className="sec-btn">
          Back to Section
        </Button>
      </Link>
    </div>
  );
};
export default Section03;
