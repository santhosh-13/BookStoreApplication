/// <reference types="node" />


import { test, expect, request } from '@playwright/test';
import 'dotenv/config';


let uid:string;

test('Create User', async ({ request }) => {
    

    const response = await request.post('https://reqres.in/api/users', {
        headers: {
            'x-api-key': process.env.API_KEY as string


        },
        data: {
            
            name: 'Jack',
            role: 'SDET'
        }
    });

    expect(response.status()).toBe(201)
    const body = await response.json()
    uid = body.id;
    console.log('User id created is:',uid)
    })


test('Get User Details', async ({ request }) => {
    
    const getresponse = await request.get('https://reqres.in/api/users/3', {
    
         headers: {
            'x-api-key': process.env.API_KEY as string


        }

    })
    
    expect(getresponse.status()).toBe(200)
    const getbody = await getresponse.json()
    expect(getbody.data.id).toBe(3)


})

test('Update data', async ({ request }) => {
    
    const putresponse = await request.put('https://reqres.in/api/users/3', {
    
        headers: {
            'x-api-key': process.env.API_KEY as string
        },
        data: {
            
            name: 'Jordan',
            role: 'SDET'
        }
    })
    
    expect(putresponse.status()).toBe(200);
    const putbody = await putresponse.json();
    expect(putbody.name).toBe('Jordan')


});

