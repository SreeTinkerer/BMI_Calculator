import './App.css';
import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calBmi = (event) => {
    event.preventDefault();

    if (weight === '' || heightFeet === '' || heightInches === '') {
      alert('Please enter a valid weight and height');
      return;
    }

    let totalHeightInInches = (parseFloat(heightFeet) * 12) + parseFloat(heightInches);
    let heightMeters = totalHeightInInches * 0.0254;

    let calculatedBmi = weight / (heightMeters * heightMeters);
    setBmi(calculatedBmi.toFixed(1));

    if (calculatedBmi < 18.5) {
      setMessage('You are underweight. Consider a balanced diet with adequate caloric intake. Include a variety of foods rich in nutrients like lean proteins, whole grains, fruits, and vegetables. Regular strength training can also help build muscle mass.');
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
      setMessage('You are perfectly weighed!!!');
    } else {
      setMessage('You are overweight');
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (kg) : </label>
            <input
              type="number"
              required
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (feet) : </label>
            <input
              type="number"
              required
              placeholder="Enter height value"
              value={heightFeet}
              onChange={(e) => setHeightFeet(e.target.value)}
            />
          </div>
          <div>
            <label>Height (inches) : </label>
            <input
              type="number"
              required
              placeholder="Enter height value"
              value={heightInches}
              onChange={(e) => setHeightInches(e.target.value)}
            />
          </div>
          <div>
            <div>
              <button className='btn' type='submit'>Submit</button>
              <button className='btn btn-outline' onClick={reload} type='button'>Reload</button>
            </div>
          </div>
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
