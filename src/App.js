import React from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import Status from './components/Status';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      Temperature: '',
      Humidity: '',
      Name: '',
      Description : '',
      Errors: ''

    }
  }
  handleChange =async e => {
    e.preventDefault();
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const API_KEY = "9958b1c24e9c9bc3e6add4130b1dce14";
    const API_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}
    &appid=${API_KEY}&units=metric
    `);

    const data = await API_call.json();
    if(city === data.name && country === data.sys.country && data.main.temp && data.main.humidity &&
    data.name && data.weather[0].description){

      console.log(data)
      this.setState({
        Temperature: data.main.temp,
        Humidity: data.main.humidity,
        Name: data.name,
        Description: data.weather[0].description,
        Errors: ''

      })
    }else{
      this.setState({
        Temperature: '',
        Humidity: '',
        Name: '',
        Description : '',
        Errors: 'Please make sure city and country name/code are valid'
      })
    }


  }




  render(){

    return(
      <div>
      <Weather />
      <Form handleChange={this.handleChange}/>
      <Status
      Temperature={this.state.Temperature}
      Humidity={this.state.Humidity}
      Name={this.state.Name}
      Description={this.state.Description}
      Errors={this.state.Errors}/>
      </div>
    );
  }
}

export default App;
