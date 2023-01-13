import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
    return(
      <section className='App'>
        <TwitterFollowCard isFollowing userName="franperez99" name="Fran Pérez"/>
        <TwitterFollowCard isFollowing={false} userName="ale99" name="Ale Pérez"/>
      </section>
    )
}