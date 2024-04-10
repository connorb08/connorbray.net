#!/usr/bin/env python3
import os
from subprocess import Popen, PIPE

# Get the directory of the script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Change the current working directory to the script directory
os.chdir(script_dir)

# Run the update_lines_of_code.sh script
process = Popen(["./update_lines_of_code.sh"], stdout=PIPE, stderr=PIPE)
stdout, stderr = process.communicate()

# Check for any errors
if process.returncode != 0:
    print("Error:", stderr.decode())
    exit(1)
else:
    print("update_lines_of_code.sh script executed successfully.")

# Change the current working directory to the stats directory
os.chdir("../stats")

# Open the lines_of_code.csv file
with open("lines_of_code.csv", "r") as file:
    lines = file.readlines()
    last_row = lines[-1]
    total_lines_of_code = last_row.strip().split(',')[-1]
    print("Total Lines of Code:", total_lines_of_code)

# Open the site directory
os.chdir("../site")

# Push the total lines of code to KV storage
process = Popen(["yarn", "install"], stdout=PIPE, stderr=PIPE)
stdout, stderr = process.communicate()
# Check for any errors
if process.returncode != 0:
    print("Error:", stderr.decode())
    exit(1)
else:
    print("Site dependencies installed.")

# Push the total lines of code to KV storage
process = Popen(["yarn", "wrangler", "kv:key", "put", "LINES_OF_CODE", total_lines_of_code, "--binding", "KV" ], stdout=PIPE, stderr=PIPE)
stdout, stderr = process.communicate()
# Check for any errors
if process.returncode != 0:
    print("Error:", stderr.decode())
    exit(1)
else:
    print("Lines of code pushed to KV storage sucessfully.")