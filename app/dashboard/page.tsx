'use client'
import { useEffect , useState} from 'react'
import { onLCP, onCLS, onFCP } from 'web-vitals'


export default function Dashboard() {

    const [vitals, setVitals] = useState<{name: string, value: number}[]>([])
    useEffect(() => {
      onLCP(metrics => setVitals(current => [...current, { name: metrics.name, value: metrics.value }]))
      onCLS(metrics => setVitals(current => [...current, { name: metrics.name, value: metrics.value }]))
      onFCP(metrics => setVitals(current => [...current, { name: metrics.name, value: metrics.value }]))
    }, [])

    return (
      <main>
        <h1>Web Vitals Dashboard</h1>
        {vitals.map(v => (
    <p key={v.name}>{v.name}: {v.value}</p>
  ))}
      </main>
    )
  }        