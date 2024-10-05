import Bowerman from '../class/bowerman';

test('Правильно создается объект', () => {
    const bowerman = new Bowerman('Bowerman');
    const correct = {
        attack: 25,
        defence: 25, 
        health: 100,
        level: 1,
        name: 'Bowerman',
        type: 'Bowerman'
    };

    expect(bowerman).toEqual(correct);
});