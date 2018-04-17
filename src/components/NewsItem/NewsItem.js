import React from 'react';
import './NewsItem.css';

const NewsItem = ({post}) => {
       
        return (
                <div className="column is-half-tablet is-one-third-desktop">
                    <div className="post card">
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
        )
}

export default NewsItem;