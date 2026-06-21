/// <reference types="node" />

import { test, expect } from '@playwright/test';
import 'dotenv/config';

let uid: string;

test('Create User', async ({ request }) => {

    console.log('==============================');
    console.log('API_KEY =', process.env.API_KEY);
    console.log('==============================');

    if (!process.env.API_KEY) {
        throw new Error('API_KEY is not defined');
    }

    const response = await request.post('https://reqres.in/api/users', {
  headers: {
    'x-api-key': process.env.API_KEY as string
  },
  data: {
    name: 'Jack',
    role: 'SDET'
  }
});

console.log('Status =', response.status());
console.log('Response =', await response.text());

expect(response.status()).toBe(201);

    const body = await response.json();
    uid = body.id;

    console.log('User id created is:', uid);
});

test('Get User Details', async ({ request }) => {

    console.log('==============================');
    console.log('API_KEY =', process.env.API_KEY);
    console.log('==============================');

    if (!process.env.API_KEY) {
        throw new Error('API_KEY is not defined');
    }

    const getresponse = await request.get(
        'https://reqres.in/api/users/3',
        {
            headers: {
                'x-api-key': process.env.API_KEY
            }
        }
    );

    console.log('Get User Status =', getresponse.status());

    expect(getresponse.status()).toBe(200);

    const getbody = await getresponse.json();

    expect(getbody.data.id).toBe(3);
});

test('Update data', async ({ request }) => {

    console.log('==============================');
    console.log('API_KEY =', process.env.API_KEY);
    console.log('==============================');

    if (!process.env.API_KEY) {
        throw new Error('API_KEY is not defined');
    }

    const putresponse = await request.put(
        'https://reqres.in/api/users/3',
        {
            headers: {
                'x-api-key': process.env.API_KEY
            },
            data: {
                name: 'Jordan',
                role: 'SDET'
            }
        }
    );

    console.log('Update User Status =', putresponse.status());

    expect(putresponse.status()).toBe(200);

    const putbody = await putresponse.json();

    expect(putbody.name).toBe('Jordan');
});