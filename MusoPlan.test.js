const { test, expect } = require('@jest/globals')


const Musician = require('./MusoPlanCode')
const Guitarist= require('./MusoPlanCode')
const Bassist= require('./MusoPlanCode')
const Flautist= require('./MusoPlanCode')
const Percussionist= require('./MusoPlanCode')
const Troupe= require('./MusoPlanCode')




test('match text values of Musician ', () => {
    myClassobj= new Musician('neethu','bassist',2020,55,"l love my bass rhythm")
        expect(myClassobj.displayDetails()).toMatch('neethu')
        expect(myClassobj.displayDetails()).toMatch('bassist')
        expect(myClassobj.displayDetails()).toMatch("l love my bass rhythm")

})
test('match text values of Guitarist ', () => {
    myClassobj= new Guitarist('neethu','guitarist',2020,55,"l love my guitar strings")
        expect(myClassobj.displayDetails()).toMatch('neethu') 
        expect(myClassobj.displayDetails()).toMatch('guitarist')
        expect(myClassobj.displayDetails()).toMatch("l love my guitar strings")
})
test('match text values of Bassist ', () => {
    myClassobj= new Bassist('neethu','Bassist',2020,55,"l love my bass system")
        expect(myClassobj.displayDetails()).toMatch('neethu')
        expect(myClassobj.displayDetails()).toMatch('Bassist')
        expect(myClassobj.displayDetails()).toMatch("l love my bass system")
})
test('match text values of Flautist ', () => {
    myClassobj= new Flautist('neethu','Flautist',2020,55,"l love my flute tunes")
        expect(myClassobj.displayDetails()).toMatch('neethu')
        expect(myClassobj.displayDetails()).toMatch('Flautist')
        expect(myClassobj.displayDetails()).toMatch("l love my flute tunes")
})
test('match text values of percussionist ', () => {
    myClassobj= new Percussionist('neethu','Percussionist',2020,55,"l love my percussion songs")
        expect(myClassobj.displayDetails()).toMatch('neethu')
        expect(myClassobj.displayDetails()).toMatch('Percussionist')
        expect(myClassobj.displayDetails()).toMatch("l love my percussion songs")
})
test('Calculate Cost of Troupe ', () => {
   myTroupeObj= new Troupe('BestTroupe',10,'Pop',2,100)
myTroupeObj.setHourlyVal(2)

    expect(myTroupeObj.costOfTroupe()).toBe(200)
})
/*
test('match text values of Troupe ', () => {
    myTroupeObjs= new Troupe('BestTroupe',10,'Pop',2,100)
        expect(myTroupeObjs.showtroupeSummary()).toMatch('BestTroupe')
     
})*/



