
'use client'
import {usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import ComponentData from '../libs/utils/ComponentDataArray';

const ComponentTitle = () => {
    const params = usePathname();
    const data = ComponentData.filter((item) => item.url === params);
    useEffect(() => {
        console.log(params)
    })
    return (
        <div>
            <h1 className="text-3xl font-semibold text-white">
                {data && data[0]?.name}
            </h1>
            <p className="text-white/70">
                {data && data[0]?.description}
            </p>
        </div>
    )
}

export default ComponentTitle