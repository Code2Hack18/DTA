import "./App.css";

function App() {
  // @ts-ignore
  window.electron.logData()

  return (
    <>
      <div style={{fontWeight:500, color:"#fff"}}>
        Welcome to Electron
      </div>
    </>
  );
}

export default App;
