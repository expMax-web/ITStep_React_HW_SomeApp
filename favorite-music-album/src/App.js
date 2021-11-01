import { FavoriteAlbumItem } from "./component/FavoriteAlbumItem/FavoriteAlbumItem";

function App() {
  return (
    <div className="App">
      <FavoriteAlbumItem
        name="Meteora"
        artist="Linkin Park"
        year="25 марта 2003"
        producer="NRG Recordings"
        about="Meteora — второй студийный альбом калифорнийской мультиплатиновой альтернативной рок-группы Linkin Park, впервые выпущенный 25 марта 2003 года. Альбом последовал за совместным проектом Reanimation, который содержал ремиксы с дебютного альбома Hybrid Theory. Примерно через год после выхода альбома Linkin Park выпустили синглы с Meteora, включая «Somewhere I Belong», «Faint», «Breaking The Habit» и «Numb». Трек «Lying from You» был выпущен в качестве промосингла."
      />
    </div>
  );
}

export default App;
