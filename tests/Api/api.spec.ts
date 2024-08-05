import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import schema from '../support/countrySchema.json';

const ajv = new Ajv();
const validate = ajv.compile(schema);
const BASE_URL = 'https://restcountries.com/v3.1/all';

test('API response schema Test', async ({ request }) => {
  const response = await request.get(`${BASE_URL}`);
  const jsonData = await response.json();

  expect(Array.isArray(jsonData)).toBe(true);

  jsonData.forEach((item, index) => {
    const valid = validate(item);
    if (!valid) {
      console.error(`Item at index ${index} does not match schema`, validate.errors);
    }
    expect(valid).toBe(true);
  });
});


test('Count the total number of regions listed', async ({ request }) => {
  const response = await request.get(`${BASE_URL}`);
  const jsonData = await response.json();

  expect(Array.isArray(jsonData)).toBe(true);

  let totalRegions = 0;

  jsonData.forEach((item: any) => {
      if (item.region) {
          totalRegions += 1;
      }
  });

 console.log(`Total number of regions listed: ${totalRegions}`);

  expect(typeof totalRegions).toBe('number'); 
});

test('Validate languages', async ({ request }) => {
  const response = await request.get(`${BASE_URL}`);
  const jsonData = await response.json();
  
  const countryNameToFind = "South Africa";

  expect(Array.isArray(jsonData)).toBe(true);

  let isNameFound = false;
  const officialLanguages: string[] = [];

    jsonData.forEach((item: any) => {
      if (item.name && item.name.common === countryNameToFind) {
          isNameFound = true;

           if (item.name.common) {
              Object.values(item.name.nativeName).forEach((name: any) => {
                  if (name.official) {
                      officialLanguages.push(name.official);
                  }
              });
          }
      }
  });

  expect(isNameFound).toBe(true);

  if (isNameFound) {
      console.log(`Country name "${countryNameToFind}" found. Official languages: ${officialLanguages.join(', ')}`);
  } else {
      console.log(`Country name "${countryNameToFind}" not found in the response.`);
  }
});
