import {Fragment} from 'react';


function App() {
  return (
    <Fragment>
    <div className='container text-center'>
      <h1 className='my-5'>Party List</h1>
      <form className='d-flex'>
        <input className='form-control' type='text' name='name' placeholder='Enter user...'/>
        <button className='btn btn-success'>Search</button>
      </form>
    </div>
    </Fragment>
  );
}

export default App;
