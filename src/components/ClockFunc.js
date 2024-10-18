import { useState } from 'react'

export default function ClockFunc({ componentType }) {

  const [date, setDate] = useState(new Date())
  
  return (
    <div>
        <h5>
            Current time by {componentType}: {date.toLocaleTimeString()}
        </h5>
    </div>
  )
}
