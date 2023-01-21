import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import useSound from 'use-sound'
import { Expericene } from '../components/experience/Expericene'



const Loader =  () => {
  return (
    <div style={{width: '100vw', height: '100vh', backgroundColor:'black'}}>
      <h1 style={{color: 'white'}}>Cargando....</h1>
    </div>
  )
}

export default function Home() {

  const [playing, setPlaying] = useState(false);
  const [volumeRange, setVolumeRange] = useState(50)  
  const [soundLoad, setSoundLoad] = useState(false)
  const volume = useRef(0.5);
  const [ play, {stop}] = useSound('/assets/music/CAJUN-Pizzolo.mp3', {
    volume: volume.current,
    onload: () => {
      setSoundLoad(true)
      console.log('SOUND LOAD')
    }
  });


  if(!soundLoad){
    return (
      <Loader />
    )
  }



  // useEffect(() => {
  //   // console.log('MUSIC ==>', music)
  //   console.log('IMAGE ==>', imagee)
  //   console.log('Play ==>', play)
  // }, [imagee])
  

  const handleClick = () => {
    setPlaying(!playing)
    playing 
    ? stop()
    : play()
  }

  const handleVolume = (e) => {
    const valueVolume = e.target.value
    setVolumeRange(valueVolume);
    volume.current = valueVolume / 100;
  }

  return (
    <div style={{position:'relative', overflow:'hidden'}}>
      <Head>
        <title>John Snow</title>
        <meta 
          name="description" 
          content="John Snow Dj - Si buscas un Dj para fiestas, bodas, etc. Contactame si quieres a alguien con experiencia
          para ofrecerte lo que buscas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Luz />
      <Luz top={'27%'} left={'70%'} background={'#82d4fb'} width={'500px'}/>
      <Container>
        <Title
          style={{borderTopLeftRadius: '999px'}}
          animate={!playing ? {opacity: 1} : {opacity: 0}} 
          transition={!playing ? { type: "tween", delay: 0.5, duration: 0.8 }: {delay: 0}} 
        >
          JUAN NIEVES
        </Title> 
        <DiscContainer 
          onClick={handleClick}
          animate={{
            rotate: playing ? 360 : 0,
          }}
          transition={{
            duration: playing ? 4 : 0.3,
            delay: 0.3,
            ease: "linear",
            times: [0, 1],
            repeat: playing ? Infinity: null,
          }}
        >
            <Disc 
              style={{borderTopLeftRadius: '999px', width: '50%', height: '50%'}}
              animate={!playing ? {y: -50, x: -10} : {y:0}} 
              transition={{ type: "tween" }} 
            >
              <Image priority={true} src="/assets/images/dj-disc1.jpg" layout='fill' objectFit='cover' style={{borderTopLeftRadius: '999px', objectFit:'cover'}}/>
            </Disc>
            <Disc 
              style={{borderTopRightRadius: '999px', width: '50%', height: '50%'}}
              animate={!playing ? {y: -50, x: 10} : {y:0}}  
              transition={{ type: "tween" }} 
            >
              <Image priority={true} src="/assets/images/dj-disc3.jpg" layout='fill' objectFit='cover' style={{borderTopRightRadius: '999px', objectFit:'cover'}} />
            </Disc>

            <Disc 
              style={{borderBottomLeftRadius: '999px', width: '50%', height: '50%'}}
              animate={!playing ? {y: 50, x: -10} : {y:0}} 
              transition={{ type: "tween" }} 
            >
              <Image priority={true} src="/assets/images/dj-disc2.jpg" layout='fill' objectFit='cover' style={{borderBottomLeftRadius: '999px', objectFit:'cover'}}/>
            </Disc>
            <Disc 
              style={{borderBottomRightRadius: '999px', width: '50%', height: '50%'}}
              animate={!playing ? {y: 50, x: 10} : {y:0}} 
              transition={{ type: "tween" }} 
            >
              <Image priority={true} src="/assets/images/dj-disc4.jpg" layout='fill' objectFit='cover' style={{borderBottomRightRadius: '999px', objectFit:'cover'}}/>
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
      <Expericene />

      <audio src="/assets/music/MUUS-Ahi.mp3" preload='auto' autoPlay loop></audio>
    </div>
  )
}

const Container = styled.main`
    position: relative;
    background: #222;
    width: 100%;
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
    font-size: 6rem;
    z-index: 2;

    background: linear-gradient(90deg, rgba(255,149,0,1) 0%, rgba(189,29,29,1) 13%, rgba(208,0,249,1) 39%, rgba(69,160,148,1) 76%, rgba(0,212,255,1) 100%); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  @media screen and (max-width: 1200px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 2.1rem;
  }
`
const DiscContainer = styled(motion.div)`
  position: relative;
  display: flex;
  width: 450px;
  height: 450px;
  flex-wrap: wrap;
  z-index: 2;
  /* transition: all 1s; */
  
   @media screen and (max-width: 2000px) {
    width: 750px;
    height: 750px;
  }

  @media screen and (max-width: 1600px) {
    width: 650px;
    height: 650px;
  }

  @media screen and (max-width: 800px) {
    width: 450px;
    height: 450px;
  }

  @media screen and (max-width: 400px) {
    width: 350px;
    height: 350px;
  } 
`

const Disc = styled(motion.div)`
  position: relative;
  /* width: 100%;
  height: 100%; */
  background-color: white;
  &img{
    object-fit: cover;
  }
`

const FaderContainer = styled.div`
    width: 20%;
    position: absolute;
    left: 67%;
    z-index: 2;
    @media screen and (max-width: 1400px) {
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

  @media screen and (max-width: 1400px) {
    transform: rotate(0deg);
  }

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
    overflow: hidden
`