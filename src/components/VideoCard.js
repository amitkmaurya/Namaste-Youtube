import React from "react";

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return(
        <div className="p-2 m-2 w-72 shadow-sm">
            <img className="rounded-lg" src={thumbnails.medium.url} alt="" />
            <ul>
                <li className="font-bold">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
};

export const AdVideocard = ({ info }) => {
    return (
        <div className="p-1 m-1 border border-red-900">
            <VideoCard info={info} />
        </div>
    )
}

export default VideoCard;