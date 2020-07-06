import React from 'react'
import Hero from './Hero'

const ListRendery = () => {

    const names = ['Clark', 'Bruce', 'Diana']
    const namesList = names.map(name => <h2 key={name}>{name}</h2>)
    //index is anti key pattern and must be avoided because causes UI issues (sorting, adding)
    const namesListIndex = names.map((name, index) => <h2 key={index}>{name}</h2>)
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
            id: 3,
            name: 'Bruce',
            age: '30',
            skill: 'Tech'
        }
    ]
    //key must be unique and must be used for performance and efficiency, ex: sorting
const heroList = heroes.map(hero => <h2 key={hero.id}>I am {hero.name} my age is {hero.age} & my skill is {hero.skill}</h2>)
const heroLst = heroes.map(hero => <Hero key={hero.id} hero={hero} />) 
    return(
        <div>
            {namesList}
            {namesListIndex}
            {heroList}
            {heroLst}         
        </div>
    )
}

export default ListRendery