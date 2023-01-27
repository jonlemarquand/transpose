import { useState } from 'react';

import './App.scss';

import Options from './components/Options';
import Piano from './components/Piano';

function App() {

	const [activeOption, setActiveOption] = useState('c');

  return (
    <div className="App">
			<Options active={activeOption} setActiveOption={setActiveOption}/>
			<Piano active={activeOption}/>
    </div>
  );
}

export default App;
