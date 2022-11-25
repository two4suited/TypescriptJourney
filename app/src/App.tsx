import React, { useEffect,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { FileWatcherEventKind } from 'typescript';
import { appendFile } from 'fs';

type resultProps = {
  message:string
}

export const App = () => {
  const [result,setResult] = useState<resultProps>()
  useEffect(() => {
      const api = async() => {
        const response = await fetch("/api/getallpeople")
        const returnString = await response.json()
        setResult(returnString)
      }
      api()
  })

  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {result?.message} Learn React 
        </a>
      </header>
    </div>
  );
}

