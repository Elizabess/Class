import {Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from '../character';

describe('Character tests', () => {
    test('Создание Bowerman', () => {
        const bowerman = new Bowerman('Robin');        
        expect(bowerman.name).toBe('Robin');
        expect(bowerman.type).toBe('Bowerman');
        expect(bowerman.health).toBe(100);
        expect(bowerman.level).toBe(1);
        expect(bowerman.attack).toBe(25);
        expect(bowerman.defence).toBe(25);
    });

    test('Создание Swordsman', () => {
        const swordsman = new Swordsman('Arthur');
        expect(swordsman.name).toBe('Arthur');
        expect(swordsman.type).toBe('Swordsman');
        expect(swordsman.attack).toBe(40);
        expect(swordsman.defence).toBe(10);
    });

    test('Создание Magician', () => {
        const magician = new Magician('Merlin');
        expect(magician.name).toBe('Merlin');
        expect(magician.type).toBe('Magician');
        expect(magician.attack).toBe(10);
        expect(magician.defence).toBe(40);
    });

    test('Создание Daemon', () => {
        const daemon = new Daemon('Lucifer');
        expect(daemon.name).toBe('Lucifer');
        expect(daemon.type).toBe('Daemon');
        expect(daemon.attack).toBe(10);
        expect(daemon.defence).toBe(40);
    });

    test('Создание Undead', () => {
        const undead = new Undead('ZombieKing');
        expect(undead.name).toBe('ZombieKing');
        expect(undead.type).toBe('Undead');
        expect(undead.attack).toBe(25);
        expect(undead.defence).toBe(25);
    });

    test('Создание Zombie', () => {
        const zombie = new Zombie('Walker');
        expect(zombie.name).toBe('Walker');
        expect(zombie.type).toBe('Zombie');
        expect(zombie.attack).toBe(40);
        expect(zombie.defence).toBe(10);
    });

    test('Некорректное имя', () => {
        expect(() => new Bowerman('A')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    });

    test('Некорректный тип', () => {
        expect(() => new Character('Hero', 'Warrior')).toThrow('Тип должен быть одним из: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie');
    });
});

