
# M&Ms

M&Ms is a challenge to test your PHP/LFI and SSRF skillz

## Building/starting/stopping M&Ms
This is a Docker container that contains a docker-compose file. You can build the Docker image and start the
container with the following command (in this directory):

```
sudo docker-compose up -d
```

Use the following command to stop the container (again, in this directory)

```
sudo docker compose down
```

## Task descriptions
- Scan the web server for a backup of the application. Download and extract the file to get the first flag. *
- The system hosts a second web server which listens on localhost:12322. This service hosts a second flag ("flag.txt") in the web server's root directory. How can you access the flag on this service remotely? 
- Compromise the system. A third flag can be found in the root directory ("/") of the system. Describe your actions. 
