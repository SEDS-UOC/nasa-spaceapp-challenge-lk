#!/usr/bin/python3

import requests

with open("links", 'r') as html: 
    urls = [link for link in html.readlines()]
    
    x = 1
    
    for url in urls:
    	name = str(x) + "1111"
    	print(name)
    	r= requests.get(url, allow_redirects=True)
    	open(str(x)+ ".jpg" , 'wb').write(r.content)
    	x+= 1
