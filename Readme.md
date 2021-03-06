# Mechademy Hiring Challange Services

    The application exposes the following end-points

        a. GET: /mechademy/login/username{username}/password/{password}
            API for user Login
        b. POST: mechademy/signup
            API for user Signup
        c. GET: mechademy/blockchain
            API to fetch blockchain of user   
        d. POST: mechademy/blockchain/username/{userName}
            API to add blocks to a user's blockchain


## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0


## Install

    $ git clone https://github.com/sshubhamagg/Mechademy-Services.git
    $ cd Mechademy-Services
    $ npm install


## Running the project

    $ npm start