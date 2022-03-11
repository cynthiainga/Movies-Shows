import countShow from "../src/modules/counts";

describe('test the count show function', () => {
    test('check if the shows are equal to 5', () => {
        const movies = [
            {name: 'Dragon ball'}, 
            {name: 'Code geass'}, 
            {name: 'Naruto'}, 
            {name: 'Bleach'}, 
            {name: 'AOT'}];
        const count = countShow(movies)

        expect(count).toBe(5)
    })
})