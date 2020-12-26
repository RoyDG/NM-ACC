##It's Node-Mongo Advance Experimental App##

- install express & express-generator globally
- express nm-acc-app --no-view ( no view flag , cause we aren't going to work with view )
- Then hit npm install in our app .
- remove public folder & clear up app App.js useless codes.
- change index.js cause we removed public folder and it will try to render public folder. So change to res.send('hello world');
- start server node bin/www (without nodemon)
- you can see it in local host 3000 in post man Get req.
