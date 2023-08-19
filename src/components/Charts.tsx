import React from 'react'
import LineGraph from './LineGraph'
import MapComponent from './MapComponent'

export default function Charts() {
  return (
    <div className='w-full m-3'>
        <h1 className="text-3xl font-semibold mb-4">COVID-19 Dashboard</h1>
        <div className="flex flex-row w-max">
          <div className='w-1/2'>
        <LineGraph />
        </div>
        <MapComponent />
        </div>
    </div>
  )
}
