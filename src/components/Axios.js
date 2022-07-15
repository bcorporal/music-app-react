import React from "react";
import { useState } from "react";
import axios from "axios";

function Axios() {
    const [quote, setQuote] = useState('')
  const getQuote = () => {
      axios.get('https://api.quotable.io/random')
      .then(res => {
          console.log(res.data.content)
          setQuote(res.data.content)
      }).catch(err => {
          console.log(err)
      })
    }


  return (
    <div className="Navbar">
      <button onClick={getQuote}> Get </button>
      {quote && <p>{quote}</p>}
    </div>
  );
}

export default Axios;