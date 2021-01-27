import logo from './logo.svg';
import './App.css';
import Form from './components/form'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/formSchema'
import User from './components/user'
import styled from 'styled-components'

function App() {

  // INITIAL VALUES SETUP FOR SLICES OF STATE //
  // INITIAL VALUES SETUP FOR SLICES OF STATE //
  const initialFormValues = {
    username: '',
    email: '',
    password: '',
    terms: false,
  };
  const initialFormErrors = {
    username: '',
    email: '',
    password: '',
    terms: false,
  };
  const initialUsers = [];
  const initialDisabled = true;


  // SLICES OF STATE INITIALIZED //
  // SLICES OF STATE INITIALIZED //
  const [formValues, setFormValues] = useState(initialFormValues);
  const [users, setUsers] = useState(initialUsers)
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors);


  // HELPER FUNCTIONS //
  // HELPER FUNCTIONS //
  // const getUsers = () => {
  //   axios.get('https://reqres.in/api/users')
  //   .then (res => {
  //     setUsers(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  const postNewUser = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([res.data, ...users]);
      setFormValues(initialFormValues);
    })
    .catch(err => {
      console.log(err);
    })
  };


  // EVENT HANDLERS //
  // EVENT HANDLERS //
  const inputChange = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: '',
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }
    postNewUser(newUser);
  }
  // useEffect(() => {
  //   getUsers();
  // }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])



  return (
    <div>
      <Header>
        <h1>User App</h1>
      </Header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {
        users.map(user => {
          return (
            <User key={user.id} details={user}/>
          )
        })
      }
    </div>
  );
};

export default App;

const Header = styled.header`
  text-align: center;
  font-size: 1.8rem;
  color: white;
`;