import { AppInfo } from './components/AppInfo';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="app__main-content">
      <header className="app__header">
        <h4>Ravn Star Wars Registry</h4>
      </header>
      <main>
        <Sidebar />
        <AppInfo />
      </main>
    </div>
  );
}

export default App;
