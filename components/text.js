'use client'

import { useState } from "react"


export const text = (data) => {
    const [res, setRes] = useState('')
    const [loading, setLoading] = useState(false)

    return (

        <div className="p-5">
            <h1 className="text-2xl font-bold">JSON</h1>
                    <pre>{JSON.stringify(data, null, 2)}</pre>

        </div>

    )
}
