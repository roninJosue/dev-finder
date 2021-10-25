import React from "react"

const Container = ({classes = [], ...props}) => {
  return (
    <div
      className={`dev-container ${[...classes].join(' ')}`}
    >
      {props.children}
    </div>
  )
}

export default Container