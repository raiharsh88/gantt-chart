import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useRef } from 'react';
import Gantt from '../components/chart'
export default function Home() {


  const chartRef = useRef(null);








  return (

    <div>

      <h1>Chart</h1>

      <Gantt />
    </div>


  )
}
