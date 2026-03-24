import "./App.css";
import Body from "./elements/Body";
import Sidebar from "./elements/Sidebar";

function App() {
  return (
    <>
      <div className="flex items-start">
        <Sidebar />
        <div className="max-w-[1173px] w-[1173px] mx-auto pt-[50px]">
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
