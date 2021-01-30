# Hotel Management System

Course Project of:
1. Computer Networks
2. Database Systems

## Requirements

- Node.js >= v10.19.0
- Docker
- Docker-compose

## Setup

```sh

# Install Dependencies
$ ./setup.sh

# Start client-dashboard
$ cd ./client-dashboard
$ npm start

# Start mgr-dashboard
$ cd ./mgr-dashboard
$ npm start

# Start signaling
$ cd ./signaling
$ npm start

# Start api-server
$ cd ./api-server
$ docker-compose up -d
$ npm start
```
