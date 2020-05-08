<html>
    <body>
        <script> 
        const fs = require('fs') 
        fs.readFile('Test.json', 'utf-8', (err, data) => { 
            if (err) throw err; 
            console.log(data); 
        }) 
        </script> 
    </body>
    </html>
