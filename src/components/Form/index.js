import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
    const [userName, setUserName] = useState('');
  
      const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${userName}`);    
        props.onSubmit(resp.data);
        setUserName('');
      }
      
      return (
        <form 
          onSubmit={handleSubmit} 
          className="form"
        >
          <input 
            type="text" 
            placeholder="GitHub username"
            required
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <button>Add User</button>
        </form>
      )
}

export default Form;