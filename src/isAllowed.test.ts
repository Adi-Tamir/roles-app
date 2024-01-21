import isAllowed from './isAllowed';
import { Knowledge } from './types';

export const testKnowledge: Knowledge = {
  citizens: [
    {
      name: 'Aco',
      roles: ['Priest'],
      allowed_places: ['Armory'],
    },
    {
      name: 'Aro',
      roles: ['Carrier', 'Guard'],
    },
    {
      name: 'Baco',
      roles: ['Farmer'],
    },
  ],
  roles: [
    {
      title: 'Priest',
      allowed_places: ['Temple'],
      roles: ['Carrier'],
    },
    {
      title: 'Guard',
      allowed_places: ['Armory', 'Storage'],
    },
    {
      title: 'Carrier',
      allowed_places: ['Storage'],
      roles: ['Farmer'],
    },
    {
      title: 'Merchant',
      allowed_places: ['Market'],
      roles: ['Carrier'],
    },
    {
      title: 'Farmer',
      allowed_places: ['Farm'],
      roles: ['Merchant'],
    },
  ],
  places: [
    {
      name: 'Temple',
    },
    {
      name: 'Armory',
    },
    {
      name: 'Storage',
    },
    {
      name: 'Farm',
    },
    {
      name: 'Market',
    },
  ],
};

// test('Aco can enter Temple', () => {
//   expect(isAllowed(testKnowledge, 'Aco', 'Temple')).toBe(true);
// });

// test('Aco can enter Armory', () => {
//   expect(isAllowed(testKnowledge, 'Aco', 'Armory')).toBe(true);
// });

// test('Aro can enter Storage', () => {
//   expect(isAllowed(testKnowledge, 'Aro', 'Storage')).toBe(true);
// });

// test('Aro cannot enter Template', () => {
//   expect(isAllowed(testKnowledge, 'Aro', 'Temple')).toBe(false);
// });

// test('Baco can enter Farm', () => {
//   expect(isAllowed(testKnowledge, 'Baco', 'Farm')).toBe(true);
// });

// test('Baco can enter Storage', () => {
//   expect(isAllowed(testKnowledge, 'Baco', 'Storage')).toBe(true);
// });

// test('Baco cannot enter Armory', () => {
//   expect(isAllowed(testKnowledge, 'Baco', 'Armory')).toBe(false);
// });
