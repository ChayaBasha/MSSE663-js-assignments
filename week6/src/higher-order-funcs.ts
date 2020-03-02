/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */
const things = ['thing1', 'thing2'];


function makeObject (value:string, index: number) {
    return ({id:index+1, name:value});
}; 
export const thingsAsObjects = things.map(makeObject);

/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from #1 above to return a single thing object.
 * - Hoist that filter callback and curry all functions.
 */
interface Thing {
    id: number;
    name: string; 
};
 const iTakeStrings = (key:string) => (thing:Thing) => thing.name === key;
 
export const iFilterThings = (key: string) => thingsAsObjects.filter(iTakeStrings(key));
