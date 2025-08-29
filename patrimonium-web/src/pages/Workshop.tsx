import { useState } from 'react'
import '../App.css'

function Workshop() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h2>Workshop</h2>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    Workshop count is {count}
                </button>
            </div>
        </>
    )
}

export default Workshop
