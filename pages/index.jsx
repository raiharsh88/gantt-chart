import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useRef } from 'react';
import Gantt from '../components/chart'

import { Container, ChartDiv } from '../styled/chartStyled'
export default function Home() {


  const chartRef = useRef(null);








  return (


    <Container>
      <ChartDiv>
        <h1>Chart</h1>



        <Gantt />
      </ChartDiv>
    </Container>

  )
}
