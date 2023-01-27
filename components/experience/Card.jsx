import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'



export const CardLeft = ({ imagesrc }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={imagesrc} layout='fill' objectFit='cover' style={{ borderRadius: '20px', objectFit: 'cover' }} />
      </ImageContainer>
      <TextContainer>
        <h2>CLUBS</h2>
        <p>
          {/* Experiencia tocando en diversos clubs ( Piramide, Explorers, Dakiti ), discotecas, bodas, etc. Así como 
          en fiestas privadas y de pueblos como las de Pozuelo, Zarzalejo... */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae porro, possimus mollitia ducimus unde quam eius repellat, aperiam explicabo iure doloribus modi illo praesentium hic nobis enim delectus, iste voluptatibus?
        </p>
      </TextContainer>
    </Container>
  )
}

export const CardRight = ({ imagesrc }) => {
  return (
    <Container>
      <ImageContainerRight>
        <Image src={imagesrc} layout='fill' objectFit='cover' style={{ borderRadius: '20px', objectFit: 'cover' }} />
      </ImageContainerRight>
      <TextContainer>
        <h2>MUSICA</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati excepturi, hic ea sequi eveniet laborum iste,
          harum voluptatibus repellat magni sunt corrupti facere quas illo porro architecto eos? Maxime, vero.
        </p>
      </TextContainer>

    </Container>
  )
}


const Container = styled.div`
  position: relative;
  display: flex;
  width: 90%;
  height: 310px;
  justify-content: center;
  -webkit-box-shadow: inset -200px 18px 275px -130px rgba(79,79,79,1);
  -moz-box-shadow: inset -200px 18px 275px -130px rgba(79,79,79,1);
  box-shadow: inset -200px 18px 275px -130px rgba(79,79,79,1);
  border-radius: 20px;
  margin-bottom: 40px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 600px;
    justify-content: center;
    align-items: center;
  }

`
const ImageContainer = styled.div`
  position: relative;
  width: 30%;
  border: 1px solid white;
  border-radius: 20px;
  background: #222;

  span{
    transform: translate(-10px, -10px);
  }

  @media screen and (max-width: 600px) {
    height: 100%;
    width: 68%;
  }
 
`
const ImageContainerRight = styled.div`
  position: relative;
  width: 30%;
  border: 1px solid white;
  border-radius: 20px;
  background: #222;

  span{
    transform: translate(10px, -10px);
  }

  @media screen and (max-width: 600px) {
    height: 100%;
    width: 68%;

  }

 
`
const TextContainer = styled.div`
  position: relative;
  width: 70%;

  p {
    margin-left: 15px;
    font-family: 'Quicksand', sans-serif;
    color: rgb(217 217 217);
    font-size: 21px;
    margin-right: 15px;
    line-height: 32px;
  }

  h2{
    font-family: 'Orbitron', sans-serif;
    font-weight: 900;
    font-size: 2rem;
    margin-left: 10px;
    background: linear-gradient(90deg, rgba(255,149,0,1) 0%, rgba(189,29,29,1) 13%, rgba(208,0,249,1) 39%, rgba(69,160,148,1) 76%, rgba(0,212,255,1) 100%); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 600px) {

    height: 77%;

    p {
      font-size: 14px;
      line-height: 28px;
    }
  }
`