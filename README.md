<br />
<p align="center">
  <a href="https://github.com/darioravello89/enviame">
    <img src="logo.png" alt="Logo" width="260" height="80">
  </a>

  <h3 align="center"><a href="https://github.com/darioravello89/enviame">Enviame</a></h3>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-test">About The Test</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>


## 1 About The Test

1. Ejercicio 1: Docker
2. Ejercicio 2: API REST + CRUD
3. Ejercicio 3: Análisis + Desarrollo
4. Ejercicio 4: Consumo API Envíame para la creación de un envío
5. Ejercicio 5: Análisis + Desarrollo
5. Ejercicio 6: Análisis + Desarrollo Aplicado a Negocio
5. Ejercicio 7: SQL


### 1.1 Built With

* [Docker](https://docker.com)
* [Nodejs](https://nodejs.org)
* [Express](https://expressjs.com)



<!-- GETTING STARTED -->
## 2 Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### 2.1 Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* [Docker for Windows](https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe)
* [Nodejs for Windows](https://nodejs.org/dist/v14.16.0/node-v14.16.0-x64.msi)
* [Git for Windows](https://git-scm.com/download/win)

Important: You need to activate the window feature Hyper-V


### 2.2 Installation

Once all the prerequisites are installed, we start to initialize the application.

1. Clone the repo
   ```sh
   git clone https://github.com/darioravello89/enviame.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ``` 

<!-- USAGE EXAMPLES -->
## 3 Docker Usage
 
After having everything installed run the following commands to raise the dockers

1. Run locally the app
   ```sh
   docker-compose -p "enviame" up
   ``` 
2. For stop (optional)
   ```sh
   docker-compose down
   ``` 
3. Delete all containers (optional)
   ```sh
    docker rm -f $(docker ps -a -q)
   ``` 
4. Delete all volumes (optional)
   ```sh
    docker volume rm $(docker volume ls -q)
   ``` 
5. Restart the containers (optional)
   ```sh
    docker-compose up -d
   ``` 
## 4 Postman collection
Download the postman collection and import it for run all the requests.
  * [Postman collection](https://github.com/darioravello89/enviame/blob/main/TEST.postman_collection.json)

## 5 Arquitecture

### 5.1 Node Express Architecture

```bash
src/
| 
|– api/                    # Controller layer: Api routes
|  |– controllers/         # Controllers after the route layer
|  |– interfaces/          # All the interfaces 
|  |– middlewares/         # Operations that check or maniuplate request prior to controller utilizing
|  |– routes/              # Express routes that define API structure
|  |– validations/         # All the celebrate validations of payloads
|- config/                 # Config settings, env variables
|– jobs/                   # Jobs definitions for node-cron
|– loaders/                # Split the startup process into modules
|– services/               # Service layer: Encapsulates all business logic
|– models/                 # Data access layer: database models 
|– subscribers/            # Async event handlers
|– types/                  # Type declaration files (d.ts) for Typescript
|– utils/                  # All the tool of the project
test/                      # Test suites
app.ts                     # App entry point
...
```

<!-- USAGE EXAMPLES -->
## 6 SQL Excersise
 ```sql
UPDATE employees emp
JOIN countries co ON co.id = emp.country_id
JOIN continents c ON c.id = co.continent_id
SET emp.salary = emp.salary + (
	emp.salary * c.anual_adjustment / 100.0
)
  ```
