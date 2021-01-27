import React from 'react'
import styled from 'styled-components'

export default function User(props) {
    const { details } = props;

    return (
        <ContainerDiv>
            <UserName>Username: {details.username}</UserName>
            <Info>Email: {details.email}</Info>
            <Info>Password: {details.password}</Info>
            <Info>Terms and Conditions were accepted.</Info>
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px auto;
    padding: 16px;
    box-shadow: 0px 1px 6px -2px black;
    border: 1px solid #181818;
    width: 90%;
    color: white;
`;

const UserName = styled.h2`
    color: #FA8072;
`;

const Info = styled.p`
    margin: 5px 0;
`;