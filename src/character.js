class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
        }

        const validTypes = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!validTypes.includes(type)) {
            throw new Error(`Тип должен быть одним из: ${validTypes.join(', ')}`);
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

        const stats = {
            Bowerman: { attack: 25, defence: 25 },
            Swordsman: { attack: 40, defence: 10 },
            Magician: { attack: 10, defence: 40 },
            Undead: { attack: 25, defence: 25 },
            Zombie: { attack: 40, defence: 10 },
            Daemon: { attack: 10, defence: 40 },
        };

        this.attack = stats[type].attack;
        this.defence = stats[type].defence;
    }
}

class Bowerman extends Character {
    constructor(name) {
        super(name, 'Bowerman');
    }
}

class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman');
    }
}

class Magician extends Character {
    constructor(name) {
        super(name, 'Magician');
    }
}

class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon');
    }
}

class Undead extends Character {
    constructor(name) {
        super(name, 'Undead');
    }
}

class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie');
    }
}

module.exports = {Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie };
