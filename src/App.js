import './index.css';
import ResumePg from './components/ResumePg';
import WorksPg from './components/WorksPg';
import data from './data/data.json';
import useMediaQuery from "./hooks/useMediaQuery"

function App() {
  const isMobile = useMediaQuery( '(max-width: 640px)' );
  function isMobileEvent(){
    const element = document.getElementById( "main-menu" );
    if( isMobile ){
      element.className="fixed isMobile";
    }
    return isMobile;
  }
  return (
    <div className="App dark:bg-darkmodeBox pb-12 w-full h-full" id="app">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />*/}
      </header>
      <ResumePg myProfile = { data[0] } isMobile={ isMobileEvent() }/>
      <WorksPg username = { data[0].githubUsername } repo={ data[0].githubRepo }/>
      <footer>
        <div className='text-center text-sm p-2 text-white bg-rose-900 dark:bg-darkmodeBox'>
          <p>This resume is created using React.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
