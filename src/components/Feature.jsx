import React from 'react'
import styled from 'styled-components'
import phone from '../images/phone.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
     display: flex;
     @media only screen and (max-width: 480px){
       flex-direction: column;
       padding: 30px 20px;
   }
`
const Left = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px){
       display: none;
   }
`
const Image = styled.img`
     
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 480px){
       width: 100%;
   }
`
const Title = styled.span`
    font-size: 70px;
    @media only screen and (max-width: 480px){
       font-size: 50px;
   }
`
const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color:#333;
    margin-top: 30px;
`
const Desc = styled.p`
     font-size: 20px;
     color:#777;
     margin-top: 30px;
`
const Button = styled.button`
   width:150px;
   border:none;
   padding:15px 20px;
   background-color: darkblue;
   color: white;
   font-size: 20px;
   border-radius: 20px;
   margin-top: 20px;
   cursor: pointer;
`

const Feature = () => {
    return (
        <Container>
            <Left><Image src={phone} alt="phone"/></Left>
            <Right>
                <Title>
                    <b>good</b> design <br/>
                    <b>good</b> business
                </Title>
                <SubTitle>We know good design means business</SubTitle>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fuga ut repudiandae 
                    facilis impedit sint quas repellat quasi 
                    delectus optio, sed, commodi cupiditate praesentium doloribus </Desc>
                <Desc>
                    The Quick Brown fox jumped over the lazy dogs. The quick briwn ffox
                </Desc>    
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes/>
        </Container>
    )
}

export default Feature
