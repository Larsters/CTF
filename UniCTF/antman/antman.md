###Antman CTF Writeup

![alt text](1.png)


After we set up our docker container let's go to the main page of the website and see how it is going there!

![alt text](2.png)

This is the web page, nothing interesting.

So let's try following the task, port scanning:

![alt text](3.png)

4141 port - JDWP is what is interesting here.
Let's open Metasploit and search for the required exploit:

![alt text](4.png)

Those are the module options I set up for the exploit, it is done with SET command:

![alt text](5.png)

and now the option for the payload:

![alt text](6.png)

Exploiting this baby was a piece of cake, here’s how it went:

![alt text](7.png)

we established meterpreter session and if we ls command we get interesting files and
directories, one of them is a flag, which is **flag_4_antman.txt** When we cat it we get: **flag_k1ll1ng_bugs_1s_h4rd**

![alt text](8.png)

Let’s go to the **Task 3** now
-So the most interesting directory was /opt with /admin subidrectory

![alt text](9.png)

we cat the file and see what the script does, it is being executed by root cheduler every 2 minutes, it means we can do something interesting with it

![alt text](10.png)

our username is tomcat
and fun fuckt, we are the owner of the file **delete-logs**

![alt text](11.png)

so what I did was I downloaded it to my local environment and edited it so it would return the content of the flag to o.txt in /opt/admin/logs

![alt text](12.png)

then I uploaded it back to the session and I did override the existing file.
After 2 minutes I got the flag:

![alt text](13.png)

**flag_g3t_r00t_or_d1e_trying**


![alt text](metasploitMeme.jpg)