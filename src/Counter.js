import React from "react"

const Counter = () => {
    const [value, SetValue] = React.useState(0)

    const decreaseCounter = () => {
        let newVal = value - 1;
        SetValue(newVal);
    }
    const resetCounter = () => {
        SetValue(0);

    }
    const increaseCounter = () => {
        let newVal = value + 1;
        SetValue(newVal);

    }

    return (
        <>
            <section style={{margin: '4rem 0'}}>
                <h2>Counter</h2>
                <h1>{value}</h1>

                <button className="btn" onClick={decreaseCounter}>Decrease</button>
                <button className="btn" onClick={resetCounter}>Reset</button>
                <button className="btn" onClick={increaseCounter}>Increase</button>
            </section>
        </>
    )
}

export default Counter;