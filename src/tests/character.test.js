
import Character from '../class/character';
// const Character = require('../character');
// const Bowerman = require('../bowerman');
// const Swordsman = require('../swordsman');
// const Magician = require('../magician');
// const Daemon = require('../daemon');
// const Undead = require('../undead');
// const Zombie = require('../zombie');

test('Правильно создается объект', () => {
    const character = new Character('Alex', 'Bowerman');
    const correct = {
        attack: undefined,
        defence: undefined, 
        health: 100,
        level: 1,
        name: 'Alex',
        type: 'Bowerman'
    };

    expect(character).toEqual(correct);
});

test('Некорректное имя', () => {
    expect(() => new Character('A')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});

test('Некорректный тип', () => {
    expect(() => new Character('Alex', 'Warrior')).toThrow('Тип должен быть одним из: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie');
});
