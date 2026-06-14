import { test, expect, request } from '@playwright/test';

let uid:number;

test('Create User', async ({ request }) => {
    

    const response = await request.post('https://reqres.in/api/users', {
        headers: {
            'x-api-key': 'pub_694402abe4ebaef6c2122009fb30a77ca60c058d5e2dcc8216039bcf7df4038d'


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
            'x-api-key': 'pub_694402abe4ebaef6c2122009fb30a77ca60c058d5e2dcc8216039bcf7df4038d'


        }

    })
    
    expect(getresponse.status()).toBe(200)
    const getbody = await getresponse.json()
    expect(getbody.data.id).toBe(3)


})

test('Update data', async ({ request }) => {
    
    const putresponse = await request.put('https://reqres.in/api/users/3', {
    
        headers: {
            'x-api-key': 'pub_694402abe4ebaef6c2122009fb30a77ca60c058d5e2dcc8216039bcf7df4038d'
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

