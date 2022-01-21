import './App.css';
import ReactQuill from 'react-quill';
import '../node_modules/react-quill/dist/quill.snow.css';
import { useState } from 'react';

function App() {
  const [body, setBody] = useState("");

  return (
    <div className="App">
      <ReactQuill
        placeholder='Enter Something!'
        value={body}
        onChange={(e) => setBody(e.target.value)} />
    </div>
  );
}

export default App;
