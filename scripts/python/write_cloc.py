#!/usr/bin/env python3
import os
from requests import post
import json
from subprocess import Popen, PIPE
from dotenv import load_dotenv

# Get the directory of the script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Change the current working directory to the script directory
os.chdir(script_dir)

# Load dotenv and go to bash scripts
os.chdir("../../")
load_dotenv()

MAIN_PROJECT_ID = os.getenv("MAIN_PROJECT_ID")
DATABASE_ENDPOINT = os.getenv("DATABASE_ENDPOINT")
MONGO_API_KEY = os.getenv("MONGO_API_KEY")

if DATABASE_ENDPOINT is None:
    print("DB_CONNECTION_STRING not found")
    exit(1)

if MAIN_PROJECT_ID is None:
    print("MAIN_PROJECT_ID not found")
    exit(1)

if MONGO_API_KEY is None:
    print("MONGO_API_KEY not found")
    exit(1)

# Change the current working directory to the bash directory
os.chdir("scripts/bash")

# Run the update_lines_of_code.sh script
process = Popen(["../bash/update_lines_of_code.sh"], stdout=PIPE, stderr=PIPE)
stdout, stderr = process.communicate()

# Check for any errors
if process.returncode != 0:
    print("Error:", stderr.decode())
    exit(1)
else:
    print("update_lines_of_code.sh script executed successfully.")

# Change the current working directory to the stats directory
os.chdir("../../stats")

# Open the lines_of_code.csv file
with open("lines_of_code.csv", "r") as file:
    lines = file.readlines()
    last_row = lines[-1]
    total_lines_of_code = last_row.strip().split(",")[-1]
    print("Total Lines of Code:", total_lines_of_code)

# Open the js scripts
os.chdir("../scripts/js")

# Run the update_lines_of_code.js script

# Update database
headers = {
    "apiKey": MONGO_API_KEY,
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
}

body = {
    "dataSource": "Cluster0",
    "database": "prod",
    "collection": "projects",
    "filter": {
        "_id": {"$oid": MAIN_PROJECT_ID},
        "stats": {"$elemMatch": {"name": "Lines of code"}},
    },
    "update": {
        "$set": {
            "stats.$.value": total_lines_of_code,
        },
    },
}

res = post(
    f"{DATABASE_ENDPOINT}/action/updateOne", data=json.dumps(body), headers=headers
)
print(res)
print(res.json())
