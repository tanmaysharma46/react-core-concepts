
import './App.css'
import Counter from './assets/counter'
import Batsman from './assets/Batsman'
import Users from './users'
import { Suspense } from 'react'
import Friends from './friends'
import Posts from './posts'

import Players from './players'

//fetch for users 
const fetchUsers = 
fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())



//async for friends 
const fetchFriends=async()=>{
  const res =await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}



//async for posts 
const fetchPosts=async()=>{
  const res =await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}


// this is app

function App() {


  //call the async function for posts 
  const postPromise=fetchPosts();




  //call the async function for friends 

  const friendPromise=fetchFriends();


  function HandleClick() {
    alert("I am clicked.")
  }

  const handleClick3 = () => {
    alert('clicked button 3 ')

  }
  const handleAdd5 = (num) => {
    const newNum = (num) + 5;
    alert(newNum);
  }

  return (


    <>

    <Suspense fallback={<h2>Posts are coming </h2> }>
      <Posts postPromise={postPromise}></Posts>
    </Suspense>



      {/* <Suspense fallback={<h3>loading ...</h3>}>
    <Friends friendPromise={friendPromise}>  </Friends>

      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat ...</h3>}>
        <Users fetchUsers={fetchUsers} ></Users>

      </Suspense>
      <Counter></Counter> */}
      <h1>Vite+React </h1>
      <Batsman></Batsman>
      {/* <button onClick="handleClick()">Click Me </button> */}
      <button onClick={HandleClick} className='btn'>Click Me </button>
      <button className='btn' onClick={function handleClick() {
        alert('fuck you  mf ')
      }}>Click me 2 </button>

      <button onClick={handleClick3}>click 3 </button>
      <button onCanPlay={() => alert('click 4')}>click 4 </button>


      {/* <button onMouseEnter={()=>handleAdd5(8)}>Click add 5</button> */}

    </>
  )
}

export default App
