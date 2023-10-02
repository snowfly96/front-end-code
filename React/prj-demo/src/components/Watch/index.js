import React, { useEffect, useRef, useState } from 'react'

export default function Watch () {
    const [startTime, setStartTime] = useState(0)
    const [elapsedTime, setElapsedTime] = useState(0)
    const [running, setRunning] = useState(false)
    let animateFrame = useRef(null)

    // 函数组件输出running值仍然为false
    console.log('outter: ', running)
    const handleStartTimer = () => {
        if (!running) {
            setRunning(true)
            setTimeout(() => {
                console.log('inner: ', running) // 获取到的是handleStartTimer作用域中保存的running值,陷入闭包陷阱
            }, 0)
        }
    }

    const tick = () => {
        animateFrame.current = requestAnimationFrame(() => {
            console.log(running)
            if (running) {
                // setElapsedTime(performance.now() - startTime)
                tick()
            }
        })
    }

    // useEffect(() => {
    //     if (running) {
    //         setStartTime(performance.now() - elapsedTime)
    //         tick()
    //     } else {
    //         cancelAnimationFrame(animateFrame.current)
    //     }
    // }, [running])

    const handleStopTimer = () => {
        if (running) {
            setRunning(false)
        }
    }

    const handleResetTimer = () => {
        handleStopTimer()
        setElapsedTime(0)
    }

    return (
        <div>
            <div>秒表: <span>{Math.round(elapsedTime / 1000)}s</span></div>
            <div>
                <button onClick={handleStartTimer}>开始</button>
                {/* <button onClick={handleStopTimer}>暂停</button>
                <button onClick={handleResetTimer}>重置</button> */}
            </div>
        </div>
    )
}

// import React from 'react'

// class Watch extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             running: false,
//             startTime: 0,
//             elapsedTime: 0,
//         }
//         this.animationFrameId = null
//     }

//     startTimer = () => {
//         if (!this.state.running) {
//             this.setState({
//                 startTime: performance.now() - this.state.elapsedTime,
//                 running: true,
//             })
//             console.log('start: ', this.state.running)
//             setTimeout(() => {
//                 console.log('inner: ', this.state.running)
//             }, 0)
//             // this.tick()
//         }
//     };

//     tick = () => {
//         this.animationFrameId = requestAnimationFrame(() => {
//             console.log('tick: ', this.state.running)
//             if (this.state.running) {
//                 const currentTime = performance.now()
//                 const elapsedTime = currentTime - this.state.startTime
//                 this.setState({ elapsedTime })
//                 this.tick()
//             }
//         })
//     };

//     stopTimer = () => {
//         if (this.state.running) {
//             cancelAnimationFrame(this.animationFrameId)
//             this.setState({ running: false })
//         }
//     };

//     resetTimer = () => {
//         this.stopTimer()
//         this.setState({ elapsedTime: 0 })
//     };


//     render () {
//         const { elapsedTime } = this.state
//         return (
//             <div>
//                 <h1>毫秒表:{Math.round(performance.now())}</h1>
//                 <div>{Math.round(elapsedTime)} 毫秒</div>
//                 <button onClick={this.startTimer}>开始</button>
//                 <button onClick={this.stopTimer}>停止</button>
//                 <button onClick={this.resetTimer}>重置</button>
//             </div>
//         )
//     }
// }

// export default Watch