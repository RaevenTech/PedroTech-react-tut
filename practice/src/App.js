import "./App.css";
import Jobs from "./components/Jobs";
import Planets from "./components/Planets";
import State from "./components/State";

function App() {
    return (
        <div className="App">
            {" "}
            <Jobs salary={4400} position="FE" company="Microsoft" />
            <Jobs salary={2500} position="BE" company="Apple" />
            <Jobs salary={3000} position="FS" company="Google" />
            <hr />
            <Planets />
            <hr />
            <State />
        </div>
    );
}

export default App;
