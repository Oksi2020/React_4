import React from 'react';
import './list.css';
import { useDataFetch } from '../Hooks/useDataFetch'

const PostsList = () => {
    const posts = useDataFetch('https://jsonplaceholder.typicode.com/posts')
    return (
        <ul> <b>Posts</b>
            {
                posts.map( post=> {
                    return(
                        <li key = {post.id}>{post.title}</li>
                    )
                })
            }
        </ul>
    )
}

const AlbumsList = () => {
    const albums = useDataFetch('https://jsonplaceholder.typicode.com/albums')
    return (
        <ul> <b>Albums</b>
            {
                albums.map( album=> {
                    return(
                        <li key = {album.id}>{album.title}</li>
                    )
                })
            }
        </ul>
    )
}

const PhotosList = () => {
    const photos = useDataFetch('https://jsonplaceholder.typicode.com/photos')
    return (
        <ul> <b>Photos</b>
            {
                photos.map( photo => {
                    return(
                        <li key = {photo.id}>{photo.title}</li>
                    )
                })
            }
        </ul>
    )
}

export const List = () => {
    return(
        <div>
            <h2>Lists</h2>
            <div className = 'lists'>
                <PostsList />
                <AlbumsList />
                <PhotosList />
            </div>
        </div>
    )
}