# Ant Man

Ant Man is a challenge that lets you play with Metasploit and local privilege escalation

**Important notice - this challenge requires a X64 based CPU**

## Building/starting/stopping Ant Man
This is a Docker container that contains a docker-compose file. You can build the Docker image and start the
container with the following command (in this directory):

```
sudo docker-compose up -d
```

After you that, you can access the web server under the following URL:

```
http://localhost:4011
```

Please note that this machine can not be hacked over the web server. You must hack the actual IP (use getcontainerip.sh to get the actual IP)

Use the following command to stop the container (again, in this directory)

```
sudo docker compose down
```
## Task descriptions

- Perform a port scan on the target system. Scan for the 2000 most common ports, including a version scan. What service is running on TCP port 4141? 
- Compromise the system using the Metasploit module "java_jdwp_debugger". You can find the flag in the root directory of the server. 
- The /opt/ directory contains a way to escalate your privileges to "root". Can you find it? You can get a root flag in "/root/flag.txt". 
