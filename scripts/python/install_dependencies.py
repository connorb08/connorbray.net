#!/usr/bin/env python3
import os
from subprocess import Popen, PIPE

# Get the directory of the script and go to it
script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)

# Install site dependencies
os.chdir("../../site")
process = Popen(["yarn", "install"], stdout=PIPE, stderr=PIPE)
stdout, stderr = process.communicate()

# Check for any errors
if process.returncode != 0:
    print("Error:", stderr.decode())
    exit(1)
else:
    print("Site dependencies installed.")

# Install admin dependencies
os.chdir("../admin")
process = Popen(["yarn", "install"], stdout=PIPE, stderr=PIPE)
stdout, stderr = process.communicate()

# Check for any errors
if process.returncode != 0:
    print("Error:", stderr.decode())
    exit(1)
else:
    print("Admin dependencies installed.")

# Install api dependencies
os.chdir("../api")
process = Popen(["yarn", "install"], stdout=PIPE, stderr=PIPE)
stdout, stderr = process.communicate()

# Check for any errors
if process.returncode != 0:
    print("Error:", stderr.decode())
    exit(1)
else:
    print("API dependencies installed.")
