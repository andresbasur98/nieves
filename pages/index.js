import { useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import useSound from 'use-sound'


// import music from '../public/assets/music/MUUS-Ahi.mp3';

export default function Home() {

  const [playing, setPlaying] = useState(false);
  const [volumeRange, setVolumeRange] = useState(50)
  const volume = useRef(0.5);

  const [ play, {stop}] = useSound('/assets/music/CAJUN-Pizzolo.mp3', {
    volume: volume.current
  });


  const handleClick = () => {
    setPlaying(!playing)
    playing 
    ? stop()
    : play()
  }

  const handleVolume = (e) => {
    console.log(e)
    const valueVolume = e.target.value
    setVolumeRange(valueVolume);
    volume.current = valueVolume / 100;
    console.log('VOLUMEN: ',volume.current)
  }

  return (
    <div>
      <Head>
        <title>John Snow</title>
        <meta 
          name="description" 
          content="John Snow Dj - Si buscas un Dj para fiestas, bodas, etc. Contactame si quieres a alguien con experiencia
          para ofrecerte lo que buscas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Container>
        <Title
          style={{borderTopLeftRadius: '999px'}}
          animate={!playing ? {opacity: 1} : {opacity: 0}} 
          transition={!playing ? { type: "tween", delay: 0.3, duration: 0.8 }: {delay: 0}} 
        >
          JUAN NIEVES
        </Title> 
        <DiscContainer 
          onClick={handleClick}
        >
            <Disc 
              style={{borderTopLeftRadius: '999px'}}
              animate={!playing ? {y: -50, x: -10} : {y:0}} 
              transition={{ type: "tween" }} 
            >
              <Image src="/assets/images/dj-disc1.jpg" layout='fill' style={{borderTopLeftRadius: '999px', objectFit:'cover'}}/>
            </Disc>
            <Disc 
              style={{borderTopRightRadius: '999px'}}
              animate={!playing ? {y: -50, x: 10} : {y:0}}  
              transition={{ type: "tween" }} 
            >
              <Image src="/assets/images/dj-disc2.jpg" layout='fill' style={{borderTopRightRadius: '999px', objectFit:'cover'}} />
            </Disc>

            <Disc 
              style={{borderBottomLeftRadius: '999px'}}
              animate={!playing ? {y: 50, x: -10} : {y:0}} 
              transition={{ type: "tween" }} 
            >
              <Image src="/assets/images/dj-disc3.jpg" layout='fill' style={{borderBottomLeftRadius: '999px', objectFit:'cover'}}/>
            </Disc>
            <Disc 
              style={{borderBottomRightRadius: '999px'}}
              animate={!playing ? {y: 50, x: 10} : {y:0}} 
              transition={{ type: "tween" }} 
            >
              <Image src="/assets/images/dj-disc4.jpg" layout='fill' style={{borderBottomRightRadius: '999px', objectFit:'cover'}}/>
            </Disc>
        </DiscContainer>
        {
          playing && (
            <FaderContainer>
              <Fader onChange={handleVolume} type="range" min="0" max="100" value={volumeRange} />
            </FaderContainer>
          )
        }

      </Container>
      <audio src="/assets/music/MUUS-Ahi.mp3" autoPlay loop></audio>
    </div>
  )
}

const Container = styled.main`
    position: relative;
    background: #222;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
const Title = styled(motion.h1)`
    position: absolute;
    font-family: 'Orbitron', sans-serif;
    font-weight: 900;
    font-size: 5rem;

    background: linear-gradient(90deg, rgba(255,149,0,1) 0%, rgba(189,29,29,1) 13%, rgba(208,0,249,1) 39%, rgba(69,160,148,1) 76%, rgba(0,212,255,1) 100%); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 550px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 2.1rem;
  }
`

const DiscContainer = styled.div`
  position: relative;
  width: 45%;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  /* column-gap: 0.75rem; */
  /* row-gap: 0.75rem; */

  transition: all 1s;
  

  /* @media screen and (max-width: 1770px) {
    width: 55%;
    height: 85%;
  }

  @media screen and (max-width: 1600px) {
    width: 40%;
    height: 80%;
  }

  @media screen and (max-width: 1480px) {
    width: 50%;
    height: 70%;
  }

  @media screen and (max-width: 1360px) {
    width: 47%;
    height: 59%;
  }

  @media screen and (max-width: 1080px) {
    width: 70%;
    height: 67%;
  }

  @media screen and (max-width: 920px) {
    width: 80%;
    height: 60%;
  }

  @media screen and (max-width: 800px) {
    width: 85%;
    height: 65%;
  }

  @media screen and (max-width: 750px) {
    width: 85%;
    height: 65%;
  }


  @media screen and (max-width: 550px) {
    width: 97%;
    height: 45%;
  }

  @media screen and (max-height: 700px){
    height: 57%;
  } */
`

const Disc = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
  

  &img{

  }
`

const FaderContainer = styled.div`
    width: 20%;
    position: absolute;
    left: 67%;

    @media screen and (max-width: 1080px) {
      position: absolute;
      width: 70%;
      top: 10%;
      left: auto;
    }
`

const Fader = styled.input`
  transform: rotate(270deg);
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  background: #000;
  border: 1px solid white;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;

  &::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 35px;
  background: #000;
  border: 1px solid white;
  cursor: pointer;
}

&::-moz-range-thumb {
  width: 15px;
  height: 35px;
  background: #000;
  cursor: pointer;
}

  @media screen and (max-width: 1080px) {
    transform: rotate(0deg);
  }

`