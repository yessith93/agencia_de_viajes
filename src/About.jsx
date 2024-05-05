import { useState } from 'react'


function About(props) {
  const [count2, setCount2] = useState(0)

  return (
    <>
      <div>
        {props.data}
      </div>
      <div className="card">
        <button onClick={() => setCount2((count) => count + 1)}>
          count is {count2}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default About