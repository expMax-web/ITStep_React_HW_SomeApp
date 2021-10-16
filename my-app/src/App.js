import "./App.css";
import { ItemInfo } from "./components/ItemInfo";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", padding: "50px" }}>
        <figure style={{ width: "500px" }}>
          <img src="./izhevsk.jpg" style={{ width: "500px" }}></img>
        </figure>
        <div>
          <ItemInfo title="Название города:" value="Ижевск" />
          <ItemInfo title="Страна:" value="Россия" />
          <ItemInfo title="Субъект Федерации:" value="Удмуртия" />
          <ItemInfo title="Глава города:" value="Олег Бекмеметьев" />
          <ItemInfo title="Основан:" value="1760 г." />
          <ItemInfo title="Население:" value="646 т. чел." />
        </div>
      </div>
    </div>
  );
}

export default App;
