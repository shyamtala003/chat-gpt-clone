import "./App.css";
import ChatBox from "./components/ChatBox";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App dark">
      <Sidebar></Sidebar>
      <ChatBox></ChatBox>
    </div>
  );
}

export default App;
