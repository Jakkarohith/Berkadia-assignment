# Docker commands :

### docker version
#### Description
Show the Docker version information
#### Usage
docker version [OPTIONS]
```
Options
Name,   shorthand	Default	Description
--format ,  -f		        Format the output using the given Go template
--kubeconfig		         Kubernetes
```
### docker unpause
#### Description
Unpause all processes within one or more containers
#### Usage
docker unpause CONTAINER [CONTAINER...]

### docker build
#### Description
Build an image from a Dockerfile
#### Usage
docker build [OPTIONS] PATH | URL | -

### docker config
#### Description
Manage Docker configs
#### Usage
docker config COMMAND

### docker container
#### Description
Manage containers
#### Usage
docker container COMMAND

### docker create
#### Description
Create a new container
#### Usage
docker create [OPTIONS] IMAGE [COMMAND] [ARG...]

### docker image
#### Description
Manage images
#### Usage
docker image COMMAND

### docker top
#### Description
Display the running processes of a container
#### Usage
docker top CONTAINER [ps OPTIONS]

### docker info
#### Description
Display system-wide information
#### Usage
docker info [OPTIONS]

### docker stats
#### Description
Display a live stream of container(s) resource usage statistics
#### Usage
docker stats [OPTIONS] [CONTAINER...]

### docker ps
#### Description
List containers
#### Usage
docker ps [OPTIONS]

### docker volume
#### Description
Manage volumes
#### Usage
docker volume COMMAND COMMAND

### docker rmi
#### Description
Remove one or more images
#### Usage
docker rmi [OPTIONS] IMAGE [IMAGE...]

### docker rm
#### Description
Remove one or more containers
#### Usage
docker rm [OPTIONS] CONTAINER [CONTAINER...]

### docker run
#### Description
Run a command in a new container
#### Usage
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

### docker inspect
#### Description
Return low-level information on Docker objects
#### Usage
docker inspect [OPTIONS] NAME|ID [NAME|ID...]

### docker kill
#### Description
Kill one or more running containers
#### Usage
docker kill [OPTIONS] CONTAINER [CONTAINER...]

### docker logs
#### Description
Fetch the logs of a container
#### Usage
docker logs [OPTIONS] CONTAINER

### docker network
#### Description
Manage networks
#### Usage
docker network COMMAND

### docker stop
#### Description
Stop one or more running containers
#### Usage
docker stop [OPTIONS] CONTAINER [CONTAINER...]

