import { useEffect, useState } from 'react';



function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  console.log(users)
  // older one
  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

    // POST data to the server
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };





  // older one

  return (
    <div className="App">
      <header className="App-header">
        <form action="" onSubmit={handleAddUser}>
          <input type="text" name='name' placeholder='Your name' />
          <input type="email" name='email' placeholder='Your emial' />
          <button>Add User </button>
        </form>
        <div className="user-info">
          <ul>
            <li>
              {
                users.map((user) =>
                  <ul key={user.id}>
                    <li>Name: {user.name} Email: {user.email} & Id: {user.id} </li>
                  </ul>
                )
              }
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
