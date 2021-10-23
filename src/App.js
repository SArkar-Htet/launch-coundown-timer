import './App.scss';
import Countdown from './components/countdown/Countdown';
import Footer from './components/footer/Footer';

function App() {
  const publicUrl = process.env.PUBLIC_URL;
  const bgStarURL = publicUrl+"/images/bg-stars.svg";
  const patternHillURL = publicUrl+"/images/pattern-hills.svg";
  return (
    <div className="App">
      <Countdown bgImage={bgStarURL} />
      <Footer bgImage={patternHillURL} />
    </div>
  );
}

export default App;
