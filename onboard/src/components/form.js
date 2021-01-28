import React from 'react';
import styled from 'styled-components';

export default function Form(props) {
    const { values, submit, change, disabled, errors} = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <MainForm onSubmit={onSubmit}>
            <div>
                <h2>Add a User</h2>

                <RedDiv>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </RedDiv>
            </div>

            <div>
                <h4>Your information:</h4>

                <Label>Username&nbsp;
                    <Input 
                    type='text'
                    name='username'
                    value={values.username}
                    onChange={onChange}
                    placeholder='Type a username...'
                    ></Input>
                </Label><br/>

                <Label>Email&nbsp;
                    <Input
                    type='text'
                    name='email'
                    value={values.email}
                    onChange={onChange}
                    placeholder='Type your email...'
                    ></Input>
                </Label><br/>

                <Label>Password&nbsp;
                    <Input
                    type='text'
                    name='password'
                    value={values.password}
                    onChange={onChange}
                    placeholder='Type your password...'
                    ></Input>
                </Label><br/>
                
                <Label>Accept Terms and Conditions&nbsp;
                    <Input
                    type='checkbox'
                    name='terms'
                    checked={values.terms}
                    onChange={onChange}
                    ></Input>
                </Label>
                <ButtonWrap>
                    <Button id='submitBtn' disabled={disabled}>Submit</Button>
                </ButtonWrap>
            </div>
        </MainForm>
    )
}

const MainForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 25px auto;
    padding: 20px;
    box-shadow: 0px 1px 6px -2px black;
    border: 1px solid #181818;
    width: 30%;
    color: white;
`;

const Label = styled.label`
    display: flex;
    justify-content: space-between;
`;

const Input = styled.input`
    border-radius: 4px;
    border-color: lightgrey;
    border-style: solid;
`;

const Button = styled.button`
    width: 20%;
    height: 25px;
    margin-top: 15px;
    border-radius: 10px;
    border-color: white;
    border-style: solid;
`;

const ButtonWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const RedDiv = styled.div`
    color: #FA8072;
`;

