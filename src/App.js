import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {React, useState} from 'react';
import { ColorList } from './ColorList';
import { Color } from './Color';
import { NewColor } from './NewColor';
import { Nav } from './Nav';





function App() {
  const [colors, setColors] = useState(["red", "blue", "black"])
  const addColorFn = (color) => {
    setColors([color, ...colors])
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/colors' element={<ColorList colorArr={colors}/>}></Route>
          <Route path='/colors/:color' element={<Color colors={colors}/>}></Route>
          <Route path='/colors/new' element={<NewColor addColorFn={(color) => addColorFn(color)}/>}></Route>
          <Route path='*' element={<Nav/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
