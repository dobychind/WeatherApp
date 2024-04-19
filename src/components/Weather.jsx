import React from 'react'
import Image from "next/image";


const Weather = ({ data }) => {
    return (
        <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
            <div className='relative flex justify-between pt-12'>
                <div className='flex flex-col'>
                    <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='/pic' width={150} height={150}/>
                    <p className='text-3xl'>{data.weather[0].main}</p>
                </div>
                <p className='text-9xl'>{data.main.temp.toFixed(0)}&#176;</p>
            </div>

            <div className='bg-black/50 relative p-8 rounded-md'>
                <p className='text-3xl text-center pb-6'>Wheather in {data.name}</p>
                <div className='flex justify-between text-center'>
                    <div>
                        <p>{data.main.feels_like.toFixed(0)}&#176;</p>
                        <p>Feels like</p>
                    </div>
                    <div>
                        <p>{data.main.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                    <div>
                        <p>{data.wind.speed}KmH</p>
                        <p>Winds</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
