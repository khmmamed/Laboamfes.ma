/**
 *  flexify using styled Component and ts 
 *  v1.0.0
 *  made by @khmamed
 *  02/03/2020
 */

// parent flex 
//////////////////////////
export const Parent = () => `display : flex;`
// flex-direction
//---------------
/**
 * column-reverse
 * row
 * row-reverse
 */
export const Row = () => `flex-direction : row;`

export const Column = () => `flex-direction : column;`
// flex-wrap
//---------------
/**
 * 
 */
// flex-flow
//---------------
/**
 * 
 */
// justify-content
//---------------
/**
 * 
 */
// align-items
//---------------
/**
 * 
 */
// align-content
//---------------
/**
 * 
 */

// Box flex 
//////////////////////////
export const Box = ({grow, shrink, basis} : any) => `flex : ${grow} ${shrink} ${basis}`