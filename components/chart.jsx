import { Chart } from 'react-google-charts'

import { Title } from '../styled/chartStyled'
import { useRef, useEffect, useState } from 'react'


export default function Gantt(props) {


    const chartRef = useRef(null);
    const [data, setData] = useState({ height: 0, width: 0 });






    function resizeListener() {

        let temp = {
            width: chartRef.current.offsetWidth,
            height: chartRef.current.offsetHeight
        };


        setData(temp)

        console.log(temp)

    }


    useEffect(() => {

        let temp = {
            width: chartRef.current.offsetWidth,
            height: chartRef.current.offsetHeight
        };


        setData(temp)


        window.addEventListener('resize', resizeListener);


        console.log(temp)

    }, [])





   

    return (
        <div className="chart-div" ref={chartRef} >
            <Chart
                style={{ backgroundColor: "grey", }}
                width={'100%'}
                height={data.height}
                chartType="Gantt"
                loader={<div>Loading Chart</div>}
                data={[
                    [
                        { type: 'string', label: 'Task ID' },
                        { type: 'string', label: 'Task Name' },
                        { type: 'string', label: 'Status' },
                        { type: 'date', label: 'Start Date' },
                        { type: 'date', label: 'End Date' },
                        { type: 'number', label: 'Duration' },
                        { type: 'number', label: 'Percent Complete' },
                        { type: 'string', label: 'Dependencies' },
                    ],
                    [
                        'Planning',
                        'Planning',
                        'Finished',
                        new Date(2021, 3, 1),
                        new Date(2021, 3, 5),
                        null,
                        100,
                        null,
                    ],
                    [
                        'Preparation',
                        'Preparation',
                        'In Progress',
                        new Date(2021, 3, 5),
                        new Date(2021, 3, 6),
                        null,
                        50,
                        null
                    ], [
                        'Procurement',
                        'Procurement',
                        'Yet to start',
                        new Date(2021, 3, 6),
                        new Date(2021, 3, 10),
                        null,
                        90,
                        null
                    ],
                    [
                        'Stage1',
                        'Stage 1',
                        'Yet to start',
                        new Date(2021, 3, 7),
                        new Date(2021, 3, 12),
                        null,
                        70,
                        null
                    ], [
                        'Stage2',
                        'Stage 2',
                        'Yet to start',
                        new Date(2021, 3, 4),
                        new Date(2021, 3, 15),
                        null,
                        20,
                        null
                    ], [
                        'Stage3',
                        'Stage 3',
                        'Yet to start',
                        new Date(2021, 3, 11),
                        new Date(2021, 3, 23),
                        null,
                        30,
                        null
                    ],



                ]}

                options={{

                    title: "Hello",
                    width: data.width,
                    height: data.height,
                    gantt: {
                        trackHeight: 50,
                    },
                    backgroundColor: 'red',
                    colors: ['red', 'white', 'green']

                }}

                rootProps={{ 'data-testid': '2' }}
            />
        </div>

    )

}
