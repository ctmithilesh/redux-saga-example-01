import React from 'react'

export default function ViewDogImages(props) {

    const data = props.data
  return (
    <div>
        {data.map((item)=>(
            <div key={item.name}>
                <img
                    src={item.image_link}
                    width={250}
                    height={250}
                    alt="catImage"
                />

            </div>



        ))}


    </div>
  )
}
