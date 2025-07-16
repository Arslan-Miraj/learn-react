import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    return (
        <>
            <h1>Github Followers: {data.followers}</h1>
            <img src={data.avatar_url} alt="My Git" width={300}/>
            <h1>Name: {data.name}</h1>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Arslan-Miraj')
    return response.json()
}
