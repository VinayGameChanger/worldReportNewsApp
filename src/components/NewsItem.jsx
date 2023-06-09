import React from 'react'

export default function NewsItem (props){
    let { title, description, urlToImage,newsUrl,author,publishedAt,channelName} = props;
    return (
      <div>
        <span style={{zIndex:1,position:"relative",top:"0.7rem",right:"-60%",width:"8.5rem"}} class="badge rounded-pill text-bg-danger">{channelName}</span>
        <div className="card" >
        <img src={urlToImage} className="card-img-top" alt="..." />
        
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {author ? author: "Unknown"} on {new Date(publishedAt).toUTCString()}</small></p>
          <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div></div>
    )
  }

