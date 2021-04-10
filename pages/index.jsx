import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useRef } from 'react';
import Gantt from '../components/chart'

import { Container, ChartDiv, Title } from '../styled/chartStyled'
export default function Home() {


  const chartRef = useRef(null);








  return (


    <Container>

      <Title>

        <h1>One month Gantt chart</h1>
      </Title>


      <ChartDiv>




        <Gantt />
      </ChartDiv>
    </Container>

  )
}
