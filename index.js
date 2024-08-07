const express = require('express');
const app = express();
const loginRouter = require('./routers/auth/Auth'); // Adjust the path as necessary

// Use the router
app.use('/api', loginRouter); // This will prefix all routes in the router with /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
