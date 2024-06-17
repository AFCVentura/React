import React from 'react';

import './WelcomeMessage.css';

function WelcomeMessage({ name }) {

return (

<div className="WelcomeMessage">

<p>Olá, {name}! Esta é a sua primeira aplicação React.</p>

</div>

);

}

export default WelcomeMessage;