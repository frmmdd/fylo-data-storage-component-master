import * as React from 'react'

const CardTwo = () => {
  const [size, setSize] = React.useState(0)

  const handleChange = (event) => {
    event.preventDefault()
    setSize(event.target.value)
  }

  return (
    <div
      className="card-second box p-4 mt-6"
      style={{ maxWidth: "35em" }}
    >
      <div className="columns is-relative is-flex-wrap-wrap">
        <div className="column is-full">
          <div
            className="columns is-align-items-end is-justify-content-space-between px-4"
          >
            <p className="is-half has-text-white">You`ve used <span>815 GB</span> of your storage</p>
            
            <p
              className="icon-clip is-half notification is-absolute has-t-5"
              style={{
                position: 'relative',
                top: "-2em"
              }}
            >
              <span className="is-size-2" style={{ display: 'inline-block', width: '2.8em' }}>${size}</span>
              GB LEFT
            </p>
          </div>
        </div>
        <div className="column is-full px-4">
          <input
            className="input is-primary"
            type="range"
            min='0'
            max='1000'
            onChange={handleChange}
            defaultValue={size}
          />
        </div>
      </div>
      <div className="columns is-flex">
        <p className="column has-text-white">0 GB</p>
        <p className="column has-text-white">1000 GB</p>
      </div>
    </div>
  )
}

export default CardTwo