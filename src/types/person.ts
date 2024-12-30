type Person = {
    name: string;
    gender: string;
    hobbies: string[];
    dob: string;
}

const person : Person = {
    name: 'diyashri',
    gender: 'F',
    hobbies: ['singing', 'piano'],
    dob:  new Date('2000-11-28').toISOString().split('T')[0].split('-').reverse().join('-').toString()
}

console.log(person)