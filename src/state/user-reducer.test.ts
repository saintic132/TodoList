import {userReducer} from './user-reducer'

test('userreducer increment only age', () => {
    const startState = {
        age:20,
        childrenCount:2,
        name: 'Dimych'
    }

    const endState = userReducer(startState, {type: 'INCREMENT-AGE'})

    expect(endState.age).toBe(21)
    expect(endState.childrenCount).toBe(2)
    expect(endState.name).toBe('Dimych')
})

test('user reducer increment only childrenCount', () => {

    const startState = {
        age:20,
        childrenCount:2,
        name: 'Dimych'
    }

    const endState1 = userReducer(startState, {type: 'INCREMENT-CHILDREN-COUNT'})

    expect(endState1.age).toBe(20)
    expect(endState1.childrenCount).toBe(3)
    expect(endState1.name).toBe('Dimych')
})