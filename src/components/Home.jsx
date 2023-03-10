import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Welcome to my website</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque tempora corrupti fugit perspiciatis autem necessitatibus pariatur distinctio itaque amet eligendi magnam iure, ut dolores quam temporibus provident? Sint commodi minus ratione illo voluptatibus velit ipsam. Itaque vitae sequi magnam harum maiores quibusdam praesentium aperiam similique non officiis fugiat, illum dicta?</p>
        <Link to={"/posts"}>Posts</Link>
    </div>
  )
}

export default Home