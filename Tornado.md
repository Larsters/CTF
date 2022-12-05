## TUCTF 2022 Writeup 
**Challenge:** Tornado
**Challenge Description:** My friend gave me the templet to his website, it is built using tornado. Can you help me find the flag?
**Challenge category:** web

Main page of tornado
![](https://i.imgur.com/wFPySYe.png)
It returns a normal greeting when we enter our name but if we inspect the source of the page there is also hidden information about Joe and the amount of cookies he has
![](https://i.imgur.com/a39hMcQ.png)

Also cookies is in boolean value but when we change it to yes nothing happens :(

![](https://i.imgur.com/kyibzpz.png)
Also we can notice that tornado runs on a python server and fun fact, we can inject some python code on it
![](https://i.imgur.com/S0ZMz9r.png)
 we can try something like this:
 ![](https://i.imgur.com/73p34T8.png)
![](https://i.imgur.com/yUVrEnD.png)
After doing some research on secure-cookie.io and experimenting with the input, I got another interesting info while writing payload for ls command: {% import os %}{{os.popen('ls').read()}}
![](https://i.imgur.com/nM4prBD.png)

It turns out /app/web2.py is the path for the script, so I tried to open it with the next script: {{open("/app/web2.py").read()}}

![](https://i.imgur.com/mPchn1i.png)

I pointed out the important information, there is a riddle with cookies that we can solve, or you could have just executed a payload to give the output, which I did, we got the flag, which is ==TUCTF{t0rnad0_1snt_v3ry_s3cur3}==
