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


## About The Test

There are many great README templates available on GitHub, however, I didn't find one that really suit my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should element DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have have contributed to expanding this template!

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

* [Docker](https://docker.com)
* [Nodejs](https://nodejs.org)
* [Express](https://expressjs.com)



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* [Docker for Windows](https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe)
* [Nodejs for Windows](https://nodejs.org/dist/v14.16.0/node-v14.16.0-x64.msi)
* [Git for Windows](https://git-scm.com/download/win)

### Installation

Once all the prerequisites are installed, we start to initialize the application.

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clonehttps://github.com/darioravello89/enviame.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ``` 
   
<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

  ```sh
  docker build -t darioravello/docker-node-enviame .
  docker run -it -p 3000:3000 --name enviame-backend-server darioravello/docker-node-enviame
  docker ps (status)
  docker images 

  docker-compose -p "my-app" up
  docker run -d -P --name="n"
  ```

  
<!-- USAGE EXAMPLES -->
## SQL Excersise
 ```sql
UPDATE employees emp
JOIN countries co ON co.id = emp.country_id
JOIN continents c ON c.id = co.continent_id
SET emp.salary = emp.salary + (
	emp.salary * c.anual_adjustment / 100.0
)
  ```