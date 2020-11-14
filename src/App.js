import React from "react";
function App() {
  function submit(e) {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'POST',
    body: JSON.stringify({"data" :datavalue}),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error("Error:", err));
  }
  function handledatachange(e) {
    setdata(e.target.value)
  }
  var [datavalue,setdata] = React.useState("")
  return (
    <div>
      <h1>Save stuff to MongoDB database with React!</h1>
      <form onSubmit = {submit}>
      <input onChange={handledatachange} value={datavalue} className = "myinput" name = "data" placeholder = "Save to database..." required/>
      </form>
      
    </div>
  );
}

export default App;
