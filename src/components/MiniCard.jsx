import React from 'react'
import styled from 'styled-components'
import search from '../images/search.png'

const Container = styled.div`
     width: 100px;
     padding: 20px;
     display: flex;
     align-items: center;
     flex-direction: column;
     -webkit-box-shadow: -3px 3px 13px 5px rgba(0,0,0,0.91); 
box-shadow: -3px 3px 13px 5px rgba(0,0,0,0.91);
@media only screen and (max-width: 480px){
       width: 50px;
   }
`
const Image = styled.img`
     width:20px;
`
const Text = styled.span`
    margin-top:10px;
    text-align:center;
    @media only screen and (max-width: 480px){
       font-size: 14px;
   }
`



const MiniCard = () => {
    return (
        <Container>
            <Image src={search}/>
            <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicin
            </Text>
        </Container>
    )
}

export default MiniCard
