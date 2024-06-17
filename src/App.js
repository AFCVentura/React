import React from 'react';

import './App.css';

import WelcomeMessage from './WelcomeMessage';

function App() {

return (

<div className="App">

<header className="App-header">

<h1>Bem-vindo ao meu projeto React!</h1>

<WelcomeMessage name="João" />

</header>

</div>

);

}

export default App;