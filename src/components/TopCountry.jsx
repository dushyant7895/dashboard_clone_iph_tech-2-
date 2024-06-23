import React from 'react'
import { TopCountryPieChart } from '../chart/TopCountryPieChart'

const TopCountry = () => {
  return (
    <div className=''>
      <p className="px-2 py-2 font-bold">Top Country</p>
      <hr />
      <div className=''>
        <TopCountryPieChart />
      </div>
    </div>
  )
}

export default TopCountry