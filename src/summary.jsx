/**
 * components 
 * JSX
 * props 
 * conditional rendering 
 * event handling
 *
 */


/**
 * 1.Api: url:https://jsonplaceholder.typicode.com/users
 * 
 * 2.
 */

/**
 * 
 */

fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>console.log(data))


const loadData =async()=>
{
    const res =await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();


    return data ;
    
}

