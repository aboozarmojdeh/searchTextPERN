import { Fragment, useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const onNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/users/?name=${name}`);
      const resResponse = await response.json();
      console.log(resResponse);
      setUsers(resResponse);
    } catch (err) {
      console.error(err.message);
    }
  };

  const userMap=users.map((user)=>{
    return(
      <tr key={user.user_id}>
     
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      
    </tr>
    )
  })
  return (
    <Fragment>
      <div className="container text-center">
        <h1 className="my-5">Party List</h1>
        <form className="d-flex" onSubmit={onSubmitForm}>
          <input
          required="required"
            className="form-control"
            type="text"
            name="name"
            placeholder="Enter user..."
            value={name}
            onChange={onNameChange}
          />
          <button className="btn btn-success">Search</button>
        </form>
        {/* <hr /> */}
        <table className="table table-dark table-hover my-5">
          <thead>
            <tr>
              
              <th scope="col">First</th>
              <th scope="col">Last</th>
              
            </tr>
          </thead>
          <tbody>
            {userMap}          
           
          </tbody>
        </table>
        {users.length===0 && <p>No results found</p>}
      </div>
    </Fragment>
  );
};

export default App;
