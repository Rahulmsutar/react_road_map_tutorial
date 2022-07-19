import React, { useState } from 'react'

function AddContact(props) {
    const [state, setState] = useState([])

    const add = (e) => {
        e.preventDefault();
        if (state.name === '' || state.email === '') {
            alert("All fields are mandatory")
            return
        }
        else {

            props.addContactHandler(state);
        }
        setState({name:"",email:""})
        // console.log(state);
    }

    return (
        <div className='ui main'>
            <h2>Add Contact</h2>
            <form className='ui form' onSubmit={add}>
                <div className='field'>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} />
                </div>
                <button className='ui button blue'>Add</button>
            </form>
        </div>
    )
}

export default AddContact