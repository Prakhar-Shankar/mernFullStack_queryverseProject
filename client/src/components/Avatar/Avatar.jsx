import React from 'react'

const Avatar = ({children, backgroundColor,px, py, padding, color, borderRadius, fontSize, cursor, textDecoration}) => { // it will fetch data from the 'navbar.jsx' file and will create what is written over there.
const style = {
  backgroundColor,
  padding: `${px} ${py}`,
  color: color || 'black',
  borderRadius,
  fontSize, 
  textAlign: "center",
  cursor: cursor || null,
  textDecoration:"none"
}


  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
 