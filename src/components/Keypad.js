import React from "react"

const Keyboard = event => {
  const handleChange = () => {
    console.log(`Entering password...`)
  }

  return <input type="password" onChange={handleChange} />
}

export default Keyboard