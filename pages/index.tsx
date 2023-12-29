import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const OptionsChartLine = {
  colors: ['#6347D2'],
  tooltip: {
    enabled: true,
    theme: 'dark'
  },
  chart: {
    foreColor: 'dark'
  },
 
  markers: {
    size: 4,
    strokeWidth: 2,
    strokeColor: '#ffd'
  },
  grid:{
    show:true
  }
}

const SeriesChartLine = [{
  name: 'primeiro',
  data: [10, 2, 20, 4, 3, 60, 7, 80, 9, 1, 100]
 
}]



export default function Home() {
  return (
    <div className={styles.container}>

      <Chart options={OptionsChartLine} series={SeriesChartLine} height={500} width={900} />

    </div>
  )
}
