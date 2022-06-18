app = require('express')();

app.get('/', (req, res) =>
    res.json({ message: 'We ❤️ Docker!' })
);

const port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log(`app listening on http://localhost:${port}`)
);
