export default (ctx)=> {
    console.log('ctx 1', {ctx: ctx.getContext()});;
    // const token = localStorage.getItem('token');
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTQ0OTkzMjY5LCJleHAiOjE1NDU1OTgwNjl9.gDwuUIH16pDscPInL9ozxnOjNTT3YVDCm65fyOOkcps';
    ctx.setContext({
        headers: {
            authorization: `Bearer ${token}`

        }
    });
    
    return ctx;
}