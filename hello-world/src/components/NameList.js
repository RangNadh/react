import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const nameList = names.map((name, index) => <h2 key={name}>{index} {name}</h2>)
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]

    // const personList = persons.map(person => <Person key={person.id} person = {person}/>)
  return (
    <div>
        {/* This is the common approach */}

        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}

        {/* This approach is using map*/}

        {/* {
            names.map(name => <h2>{name}</h2>)
        } */}

        {/* {personList} */}

        {nameList}

    </div>
  )
}

export default NameList