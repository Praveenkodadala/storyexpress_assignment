# storyexpress_movies

Libraries/frameworks:
Node.js
Express
Mysql
Sequelize (ORM)


use sequelize commands:
sequelize init
sequelize cli
sequelize



Postman for testing post requests;



Database name = story;


 "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "mysql2": "^2.2.5",
    "nodemon": "^2.0.6",
    "sequelize": "^6.3.5"
  }


Tables:
movies
ratings
links
tags



Post request :
http://localhost:3000/api/linkcreate

{
    "id": 6,
    "movieid": "5",
    "imdbid": "344",
    "tmdbid": "24",
    "updatedAt": "2020-11-28T10:49:41.243Z",
    "createdAt": "2020-11-28T10:49:41.243Z"
}





Get request :
http://localhost:3000/api/moviesall


[{"id":1,"title":"testing","genres":"comedy","createdAt":"2020-11-28T10:10:40.000Z","updatedAt":"2020-11-28T10:10:40.000Z"},{"id":2,"title":"testing2","genres":"comedy","createdAt":"2020-11-28T10:10:48.000Z","updatedAt":"2020-11-28T10:10:48.000Z"},{"id":3,"title":"testing3","genres":"comedy","createdAt":"2020-11-28T10:10:54.000Z","updatedAt":"2020-11-28T10:10:54.000Z"}]



CRUD operations using sequelize querying:
.creat()
.findAll()
.update()
.destroy()