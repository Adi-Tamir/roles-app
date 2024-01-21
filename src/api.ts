import axios from 'axios';

import { Citizen, Place, Role } from './types';

const BASE_URL = 'https://apulalula-api.up.railway.app/';

const client = axios.create({
  baseURL: BASE_URL,
});

export function getPlaces(): Promise<{ places: Place[] }> {
  return client.get('/places');
}

export function getCitizens(): Promise<{ citizens: Citizen[] }> {
  return client.get('/citizens');
}

export function getRoles(): Promise<{ roles: Role[] }> {
  return client.get('/roles');
}
