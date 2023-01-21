import React from 'react'
import styled from 'styled-components'
import { CardLeft, CardRight } from './Card'



export const Expericene = () => {
  return (
    <Container>
      {/* <Luz top={'69%'} left={'70%'} background={'#82d4fb'} width={'375px'}/> */}

      <Experience>
        <CardLeft imagesrc={"/assets/images/dj-disc4.jpg"}/>
        <CardRight imagesrc={"/assets/images/dj-disc4.jpg"}/>
      </Experience>
    </Container>
  )
}

const Container = styled.div`   
    width: 100%;
    min-height: 100vh;
    background: #222;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


const Luz = styled.div`
    position: absolute;
    width: ${props => props.width || '600px'};
    height: 355px;
    z-index: 1;
    background: ${props => props.background || '#ff6afb'};
    filter: blur(149px);
    top: ${props => props.top || 0};
    left: ${props => props.left || 0};
    overflow: hidden;
`

const Experience = styled.section`
  position: relative;
  width: 90%;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid white; */
 
`