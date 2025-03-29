import React from 'react'

const login = () => {
  return (
    <div>
      Admin login
      <p>Feel free to login as admin</p>
    </div>
  )
}

export default login

// either Static metadata
// export const metadata = {
//   title: '...',
// }
 
// or Dynamic metadata
export async function generateMetadata({ params }) {
  console.log(params)
  return {
    title: 'Admin login',
  }
}