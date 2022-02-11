import logo from './logo.svg';
import TheContainer from './Components/TheContainer';
import '../src/App.css';
import backgroundVideo from './Components/knight.mp4'
// import backgroundVideo from '../src/Components/Content/knight.mp4';

function App() {
    return (
         <div>
<TheContainer/>
<video className='videoTag' autoPlay loop muted>
     <source src={backgroundVideo} type='video/mp4' />
 </video>
 </div>
    )
}

export default App;
