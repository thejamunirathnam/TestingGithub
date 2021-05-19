import React from 'react'
import PostComponent from './PostComponent';

function ListandKeys() {
    const posts = [
      { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
        { id: 2, title: 'Installation', content: 'You can install React from npm.' },
       { id: 3, title: 'development', content: 'You can install React from npm.' },
        { id: 4, title: 'Production', content: 'You can install React from npm.' },
        { id: 5, title: 'Package', content: 'You can install React from npm.' }
    ];

    const postList = posts.map(post => <PostComponent key={post.id} value={post.title}/>)
    return (
        <div>
            <h1>List and Keys</h1>
            {postList}
        </div>
    )
}

export default ListandKeys
