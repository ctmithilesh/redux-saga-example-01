import React from 'react'

export default function ViewCatImages(props) {

    const data = props.data
  return (
    <div>
        {data.map((item)=>(
            <div key={item.id}>
                <img
                    src={item.url}
                    width={250}
                    height={250}
                    alt="catImage"
                />

            </div>



        ))}


    </div>
  )
}
