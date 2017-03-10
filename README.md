# quaintServer
This is a web server that routing is managed in the browser (I know... sounds crazy).
Here is my thought. I want to be able to say host a website out of my chromebook, and while I could install crouton, or some other stuff, well that's just not as exciting, plus it defeats the purpose of this site.

In theory you could write 5 different server.html/server.js implementations, have them all running, and they will all be sandboxed from eachother. And you are running 5 different sandboxed servers... I find this fascinating.

Additionally I would love to be able to build this really simple app.js into my browser, and then push my public IP (the tricky part is that we have firewalls, in the current setup we work aroudn that using this node app.js). If we can work around the whole firewalls (without having to actually open them up) we could have chromebooks that are exclusively web browsers, and you could have a section of the site up/down at a time, if you say setup a different route in each "server". It's a really interesting concept.

#NOTE
WEBRTC is one of the things I want to investigate with this (noted below)

one approach ive been considering is using web rtc to route and connect a websocket between browsers, but havent gottent to a point of implementation yet. One of my ultimate goals is to be able to SSH through the data channel of WebRTC

Caveat: 

1.   If you run the npm intall inside your network, this will only work inside your network.
        If you install this on a common server with a static IP, you can just update the ip address reference to point to that, so it'll really truly work across the internet. (not sure if there will be timing issues).


# installing

    npm install
    
Now run it by typing
   
    node app.js
  
Next open your server.html file (just double click it directly, aka open it as a file:///).

the console for node app.js should state A new server has connected. (maybe a better name is possible but whatever).

Finally open a browser and type in the URL http://ip address:port\onaclovtech

The results should display onaclovtech on the page (I want to actually return a files contents, but yea.... I can't do that for some reason.... haven't figured out the File api).


Success.

If you want to help or have ideas lemme know.

I have tons, but those will become clearer and clearer as time goes on.


[Quaint Server Demo Video](http://youtu.be/ls0_Pse4t10)

[Quaint Server Demo with Muptiple End Points](http://youtu.be/gZQrrFJMaps) (Most working example :))
