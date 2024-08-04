import { Locator } from 'playwright';

/**
 * Finds and clicks on an element within a given `Locator` that matches the specified text value.
 * 
 * @param items - A `Locator` containing a list of elements to search through.
 * @param value - The text value to search for within the elements.
  * 
 **/
export async function getMappedItem(items: Locator, value: string) {
    let index;
    let count = await items.count();

    const elementMap: Map<string, number> = new Map();
 
     for (let i = 0; i < count; i++) {
       const element = items.nth(i);
       const textContent = await element.textContent();
       
       if (textContent) {
         elementMap.set(textContent.trim(), i);
       }
     }
   
     if (elementMap.has(value)) {
       index = elementMap.get(value)!; 
       const element = items.nth(index);
       
       await element.click(); 
       } else {
     }

    }

    