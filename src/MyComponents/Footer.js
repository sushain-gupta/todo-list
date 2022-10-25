import React from 'react'

export default function Footer() {
  let footerStyle = {
    width: "100%" 
  }

  return (
    <footer className='bg-dark text-light text-center py-3' style={footerStyle}>
      Copyright &copy; 2022
    </footer>
  )
}
