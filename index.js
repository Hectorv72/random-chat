const express = require('express');
const app = express();
require('morgan');

app.set('port',process.env.PORT || 4000);

app.listen(app.get('port'), () => console.log(`localhost:${app.get('port')}`))