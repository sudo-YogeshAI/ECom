import React,{useState,useEffect} from 'react';
import "./App.css";

const App = () => {

  const [array,setArray] = useState([]);
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setArray(json));
    console.log(array);
      
  }, [])

  
            
  

  return (
    <div>
     <Header />
    <TodoForm />
    <Counter />
    <Counter />
    <section className = 'section'>Heyy</section>
    {array.map(function(item){
      return <h1>{item.title}</h1>
    })}

    <Footer />

    </div>
  );
}

const Header = () => {
  return(
    <header>
      This is header
    </header>
  )
}
const Footer = () => {
  return(
    <div id='footer'>
      This is footer
    </div>
  )
}

const Counter = () => {
  const [count,setCount] = useState(0);
  const increment = () => {
    let temp = count;
    if (count === 10){
      temp = -1;
    }

    setCount(temp+1);
  }

  const decrement = () => {
    let temp = count;
    setCount(temp-1);
  }

  return (
    <div>
    <h1>{count}</h1>
    <button onClick = {increment}>+</button>
    <button onClick = {decrement}>-</button>
    </div>
  )

}

const TodoForm = () => {
  return (
    <div>
      <h1>HEllo</h1>
    </div>
  )
}


export default App;