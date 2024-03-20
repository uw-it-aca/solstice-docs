[![Coverage Status](https://coveralls.io/repos/github/uw-it-aca/solstice-vue/badge.svg?branch=main)](https://coveralls.io/github/uw-it-aca/solstice-vue?branch=main)

# solstice-docs
Solstice Design System

## Requirements
Install or update the following applications:

* [VS Code](https://code.visualstudio.com/)
* [Node.js (LTS)](https://nodejs.org/en)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Initial Setup
Skip this step if you have already performed the Setup steps previously.

Clone this repository.
```sh
git clone git@github.com:uw-it-aca/solstice-docs.git
```

Change into the working directory.
```sh
cd solstice-docs
```

Checkout the develop branch.
```sh
git checkout develop
```

And do a pull 
```sh
git pull
```

Copy the sample environment file.  
```sh
cp .env.sample .env
```

If nothing happens, it's been done correctly. The default port is :8000; if you want to use that port, you don't need to change anything. 

To change the port, edit the .env file in your editor of choice. 

## Development
Perform these steps to begin working on your development branch.

Change into the working directory.
```sh
cd solstice-docs
```

Checkout the develop branch.
```sh
git checkout develop
```

OR... checkout a specific branch.
```sh
git checkout <branch-name>
```

Update the branch.
```sh
git pull
```

Start your development server using Docker Compose.
```sh
docker compose up
```

View your development build in a browser.
```sh
http://localhost:8000
```

## Utilities
This following utilities can be run from inside the Docker container. This can be done by opening a container
shell and running the following commands:

### Run Unit Tests with [Vitest](https://vitest.dev/)
```sh
npm run test:unit
```

### Run Unit Tests with Coverage report
```sh
npm run coverage
```

### Lint with [ESLint](https://eslint.org/)
```sh
npm run eslint
```

### Lint with [Stylelint](https://stylelint.io/)

```sh
npm run stylelint
```

