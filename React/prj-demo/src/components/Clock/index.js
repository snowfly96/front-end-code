import React, { useState, useEffect, useRef } from 'react'

export default function Clock (props) {
    const [count, setCount] = useState(props.count)
    const [hello, setHello] = useState('')
    let timer = useRef(null)
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timer = setInterval(() => {
            setCount(preCount => {
                if (preCount === 1) {
                    setHello('Hello, snow')
                    clearInterval(timer)
                } else {
                    return preCount - 1
                }
            })
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <div>倒计时: <span>{count}</span></div>
            {!!hello &&
                <div>
                    {hello}
                </div>
            }
        </div>
    )
}
