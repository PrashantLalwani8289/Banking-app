'use client'

import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount : number}) => {
  return (
    <div>
        <CountUp end={amount} decimal=',' prefix='$' decimals={2}></CountUp>
    </div>
  )
}

export default AnimatedCounter