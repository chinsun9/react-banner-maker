import React from 'react';
import './App.css';
import Header from './components/Header';
import HistoryList from './components/HistoryList';
import SettingCanvasSize from './components/SettingCanvasSize';
import SideTab from './components/SideTab';
import Canvas from './components/Canvas';
import Textfield from './components/Textfield';
import SettingCanvasDetail from './components/SettingCanvasDetail';
import ExportButtons from './components/ExportButtons';

function App() {
  return (
    <>
      <div className="App container p-5">
        <Header></Header>
        <SettingCanvasSize></SettingCanvasSize>
        <Canvas></Canvas>
        <Textfield></Textfield>
        <SettingCanvasDetail></SettingCanvasDetail>

        <ExportButtons></ExportButtons>

        <HistoryList />
      </div>
      <SideTab></SideTab>
    </>
  );
}

export default App;
