import React from 'react'

const HT = ({data}) => {
  return (
    <div>
        <h1>
            {data.map((d)=>{
                return(
                    <h1>{d}</h1>
                )
            })}
        </h1>
    </div>
  )
}

export default HT