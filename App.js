import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <h1 className='heading'>Welcome! First things first.....</h1>
      <small className='sub-heading'>You can always change then later</small>
      
      <br></br>
      <br></br>
      <br></br>
        <form>
                <div class="form-group">
                    <label>Full Name</label>
                    <br></br>
                    <input class="input1" type="text"  placeholder="Steve Jobs"/>
                    
                    <br></br>
                    <br></br>
                    <label>Display Name</label>
                    <br></br>
                    <input class="input2" type="text" placeholder="Steve" />
                    <br></br>
                </div>
                
                  <button className="click">Click Me!</button>
                
                 
            </form>
      {/* </header> */}
    </div>
  );
}

export default App;
