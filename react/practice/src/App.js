
import { useState } from 'react';
import './App.css';

function App() {

  const [isDark, setIsDark]= useState(false)

  return <Page isDark={isDark} setIsDark={setIsDark}></Page>
}

export default App;
