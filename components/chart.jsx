import { Chart } from 'react-google-charts'





export default function Gantt(props) {

    return (
        <div className="chart-div" >
            <Chart
                width={'100%'}
                height={'400px'}
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
                        0,
                        null
                    ],



                ]}

                options={{
                    height: 400,
                    gantt: {
                        trackHeight: 30,
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>

    )

}