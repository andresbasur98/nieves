import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import styles from '../styles/Home.module.css'

export default function Home() {

  const [playing, setPlaying] = useState(false);


  const handleClick = () => {
    console.log('Click')
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

      <main className={styles.main}>


        <DiscContainer 
          onClick={() => setPlaying(!playing)}
        >
          <DiscRow 
            style={{marginBottom: '10px'}}
            animate={playing ? {y: -50} : {y:0}}
          >
            <Disc style={{borderTopLeftRadius: '999px', marginRight: '5px'}}>
              <Image src="/assets/images/dj-disc1.jpg" layout='fill' style={{borderTopLeftRadius: '999px', objectFit:'cover'}}/>
            </Disc>
            <Disc style={{borderTopRightRadius: '999px', marginLeft: '5px'}}>
              <Image src="/assets/images/dj-disc2.jpg" layout='fill' style={{borderTopRightRadius: '999px', objectFit:'cover'}} />
            </Disc>
          </DiscRow>

          <DiscRow 
            style={{marginTop: '10px'}}
            animate={playing ? {y: 50} : {y:0}}
          >
            <Disc style={{borderBottomLeftRadius: '999px', marginRight: '5px'}}>
              <Image src="/assets/images/dj-disc3.jpg" layout='fill' style={{borderBottomLeftRadius: '999px', objectFit:'cover'}}/>
            </Disc>
            <Disc style={{borderBottomRightRadius: '999px', marginLeft: '5px'}}>
              <Image src="/assets/images/dj-disc4.jpg" layout='fill' style={{borderBottomRightRadius: '999px', objectFit:'cover'}}/>
            </Disc>
          </DiscRow>
        </DiscContainer>


      </main>
    </div>
  )
}

const DiscContainer = styled.div`
  width: 45vw;
  height: 75vh;
  background-color: #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 1s;
`

const DiscRow = styled(motion.div)`
  display: flex;
`

const Disc = styled.div`
  position: relative;
  width: 50%;
  height: 35vh;
  background-color: aqua;
  

  &img{

  }
`