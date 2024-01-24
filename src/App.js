import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import DontDo from './Components/DontDo';
import Idiot from './Components/Idiot';
import FiveSec from './Components/FiveSec'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Link to="/fiveSec">五秒定律</Link>
        <Link to="/idiot">我係白痴仔</Link>
        <Link to="/dontDo">唔淮做</Link>
        <button id="darkM">黑/白主題</button>
        <Routes>
          <Route path="/idiot" element={<Idiot />}/>
          <Route path="/dontDo" element={<DontDo />}/>
          <Route path="/fiveSec" element={<FiveSec />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
