import "./App.css";
import Jobs from "./components/Jobs";

function App() {
    return (
        <div className="App">
            {" "}
            <Jobs salary={2000} position="FE" company="Microsoft" />
            <Jobs salary={2500} position="BE" company="Apple" />
            <Jobs salary={3000} position="FS" company="Google" />
        </div>
    );
}

export default App;
