import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="contariner">
      <div className="App">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Pegah Bozorgmanesh and is{" "}
            <a
              href="https://github.com/Pegah1368/dictionary-project"
              target="-blank"
            >
              open-source on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
