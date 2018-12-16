/**
 * Custom client middleware
 */

export default middlewares => {

    if (!Array.isArray(middlewares)) {
        // throw new TypeError('Middleware must be an array!');
        console.error('Middleware must be an array!', middlewares);
    }

    for (const fn of middlewares) {
        if (typeof fn !== 'function') {
            // throw new TypeError('Middleware must be a function!');
            console.error('Middleware must be a function!', fn);
        }
    }

    return operation => {
        return middlewares.reduce(async (operation, nextFn) => {
            try {
                return await nextFn(operation);
            } catch(e) {
                console.error('Error processing middleware: ', e);
            }
        }, operation);
    }
}