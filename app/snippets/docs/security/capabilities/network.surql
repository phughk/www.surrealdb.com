// Deny network access to localhost and private IPv4 ranges
$ surreal start --allow-net --deny-net "127.0.0.1","localhost","10.0.0.0/8","192.168.0.0/16","172.16.0.0/12"

// Allow access to an internal system but only to port 443
$ surreal start --allow-net internal.example.com:443

// Allow access to some private networks but not to others
$ surreal start --allow-net 10.0.0.0/16 --deny-net 10.10.0.0/24
