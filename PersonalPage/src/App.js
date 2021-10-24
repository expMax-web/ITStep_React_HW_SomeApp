import { PersonalPage } from "./pages/PersonalPage/PersonalPage";

function App() {
  return (
    <div className="App">
      <PersonalPage
        poster="https://rickandmortyapi.com/api/character/avatar/232.jpeg"
        name="Morty Smith"
        status="Alive"
        species="Human"
        gender="Male"
        about="Currently, Morty is around 14 years old. He first met his grandfather, Rick Sanchez, when the latter moved into his home after supposedly being absent for 20 years. However, it was revealed that Rick is originally from Dimension C-137 and, after losing his wife and daughter, eventually moved into Morty's dimension to live with an adult version of Beth. However, curiously enough, it has been shown Rick knew Morty when he was a baby."
      />
    </div>
  );
}

export default App;
