import React from 'react'
import Hero from './Hero'

const ListNames = () => {

    const names = ['Clark', 'Bruce', 'Diana']
    const namesList = names.map(name => <h2>{name}</h2>)
    const heroes = [
        {
            id: 1,
            name: 'Clark',
            age: '25',
            skill: 'Flight'
        },
        {
            id: 2,
            name: 'Diana',
            age: '23',
            skill: 'Wip'
        },
        {
            id: 1,
            name: 'Bruce',
            age: '30',
            skill: 'Tech'
        }
    ]
const heroList = heroes.map(hero => <h2>I am {hero.name} my age is {hero.age} & my skill is {hero.skill}</h2>)
const heroLst = heroes.map(hero => <Hero hero={hero} />) 
    return(
        <div>
            {namesList}
            {heroList}
            {heroLst}         
        </div>
    )
}

export default ListNames