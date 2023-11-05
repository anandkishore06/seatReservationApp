import "./App.css";
import { Button } from "@progress/kendo-react-buttons";
// import '@progress/kendo-theme-default/dist/all.css';
import "@progress/kendo-theme-material";
import { Link } from "react-router-dom";
import BoxComp from "./components/BoxComp";
function App() {
  console.log("hii");

  return (
    <div className="App">
      <div className="container1">
        <h3 className="section-main">Select a Section : </h3>
        <div className="img-row">
          <img src="/images/img1.jpg" alt="" className="img-col" />
          <img src="/images/img3.jpg" alt="" className="img-col" />
          <img src="/images/img2.jpg" alt="" className="img-col" />
          <img src="/images/img5.jpg" alt="" className="img-col" />
        </div>
        <div className="btn-main">
          <Link to="/section01">
            <Button
              fillMode="outline"
              themeColor={"primary"}
              className="btn-child"
            >
              Section 01
            </Button>
          </Link>
          <Link to="/section02">
            <Button
              fillMode="outline"
              themeColor={"primary"}
              className="btn-child"
            >
              Section 02
            </Button>
          </Link>
          <Link to="/section03">
            <Button
              fillMode="outline"
              themeColor={"primary"}
              className="btn-child"
            >
              Section 03
            </Button>
          </Link>
          <Link to="/section04">
            <Button
              fillMode="outline"
              themeColor={"primary"}
              className="btn-child"
            >
              Section 04
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
