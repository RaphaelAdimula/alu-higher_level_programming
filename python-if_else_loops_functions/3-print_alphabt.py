#!/usr/bin/python3
for i in range(ord('a'), ord('z')+1):
    Adimula = chr(i)
    if Adimula not in "qe":
        print("{:s}".format(Adimula), end="")
