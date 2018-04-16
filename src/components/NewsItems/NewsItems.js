import React from 'react';

const NewsItems = ({posts}) => {
       
        return (
            <div className="columns is-multiline">
                {posts.map(post =>
                    <div className="column is-one-third" key={post.index}>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={`${post.urlToImage}`} alt={`${post.title}`} />
                                </figure>
                            </div>
                            <div className="card-header">
                                <h3 className="card-header-title">{post.title}</h3>
                            </div>
                            <div className="card-content">
                                <p>{post.source.name}</p>
                                <p>{post.description}</p>
                            </div>
                        </div>
                    </div>
                 )}
            </div>
        )
}

export default NewsItems;