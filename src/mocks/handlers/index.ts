import productHandlers from './products'
import categoryHandlers from './categories'
// TODO: Remove never[] and replace with actual handlers
const combinedHandlers = [...productHandlers, ...categoryHandlers]

export default combinedHandlers
