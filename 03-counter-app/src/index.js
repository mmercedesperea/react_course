import { createRoot } from "react-dom/client";
import CounterApp from "./CounterApp";
// import FirstApp from "./FirstApp";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <FirstApp hello="Hello!" number={32} /> */}
    <CounterApp value={1234} />
  </>
);
