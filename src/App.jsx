
import './App.css'
import Counter from './assets/counter'
import Batsman from './assets/Batsman'

function App() {
  function HandleClick() {
    alert("I am clicked.")
  }

  const handleClick3 = () => {
    alert('clicked button 3 ')

  }
  const handleAdd5=(num)=>{
    const newNum=(num)+5;
    alert(newNum);
  }

  return (


    <>
    <Counter></Counter>
      <h1>Vite+React </h1>
      <Batsman></Batsman>
      {/* <button onClick="handleClick()">Click Me </button> */}
      <button onClick={HandleClick} className='btn'>Click Me </button>
      <button className='btn' onClick={function handleClick() {
        alert('fuck you  mf ')
      }}>Click me 2 </button>

      <button onClick={handleClick3}>click 3 </button>
      <button onCanPlay={()=>alert('click 4')}>click 4 </button>
    

    {/* <button onMouseEnter={()=>handleAdd5(8)}>Click add 5</button> */}

    </>
  )
}

export default App
