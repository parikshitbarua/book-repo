# book-repo
This repository contains examples of various CRUD operations using Sequelize and MySQL. <br><br>
Postman Collection: 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/17233538-49a69a5c-6eaa-4b2b-8311-7cb3a3773c55?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D17233538-49a69a5c-6eaa-4b2b-8311-7cb3a3773c55%26entityType%3Dcollection%26workspaceId%3D9b34a1f7-8cf0-45cd-99d2-d689bd74da4e)
<br><br>
<i> Please follow the Project Setup guide and make sure the docker container is running prior to running any requests on Postman.<br><br>
<h2> Project Setup </h2>
<h3> Initial Setup</h3>
Once the repo is cloned, run the following commands: <br>

```

cd book-repo-app/

```

```

npm install

```

<h3> Creating .env</h3>
Inside the "book-repo-app", create a ".env" file with the following contents: <br><br>

```

DB_NAME=testdb
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=mySQLRootUserPassword
NODE_DOCKER_PORT=8080

```

Create another ".env" file at the root of the project with the following contents:

```

MYSQLDB_DATABASE=testdb
MYSQLDB_DOCKER_PORT=3306
MYSQLDB_LOCAL_PORT=3307
MYSQLDB_USER=root
MYSQLDB_ROOT_PASSWORD=mySQLRootUserPassword
NODE_LOCAL_PORT=6868
NODE_DOCKER_PORT=8080

```

<h3> Run Project Locally (Without Docker) </h3> <br>
This will start the server at http://localhost:8080.<br><br>

```

cd book-repo-app/

```

```

npm run start:dev
  
```


<h3> Run Project Locally (Docker) </h3>
This will start the server at http://localhost:6868.<br> Go to the root directory<br><br>

```

cd ..

```

```

docker-compose up -d

```
<br>






