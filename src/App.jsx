import "./App.css";
import ChatBox from "./components/ChatBox";
import Sidebar from "./components/Sidebar";

function App() {
  // const api_key = import.meta.env.VITE_API_KEY;
  // let getMessage = async () => {
  //   try {
  //     let result = await fetch("https://api.openai.com/v1/chat/completions", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${api_key}`,
  //       },
  //       body: JSON.stringify({
  //         model: "gpt-3.5-turbo",
  //         message: { role: "user" },
  //         content: "Hello",
  //         max_token: 100,
  //       }),
  //     });
  //     let data = await result.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // getMessage();

  return (
    <div className="App dark">
      <Sidebar></Sidebar>
      <ChatBox></ChatBox>
    </div>
  );
}

export default App;
