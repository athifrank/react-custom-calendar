import React from "react";
import Calendar from './Components/Commons/Calendar'
import Validation from './Components/Validation'
import Spinner from './Components/Commons/Spinner'

function App() {

  return (
    <div>
        {/* <Calendar /> */}
         <Spinner shouldLoad={true}/>
        <Validation />
    </div>
  );
}


export default App;

