#!/usr/bin/env python3
import os
from subprocess import Popen, PIPE
from dotenv import load_dotenv

# from pymongo.mongo_client import MongoClient
# from pymongo.server_api import ServerApi
# from pymongo import timeout as pymongo_timeout
# from bson.objectid import ObjectId

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
process = Popen(
    ["node", "cloc_write_database.js", total_lines_of_code],
    stdout=PIPE,
    stderr=PIPE,
    env={
        "DATABASE_ENDPOINT": DATABASE_ENDPOINT,
        "MONGO_API_KEY": MONGO_API_KEY,
        "PROJECT_ID": MAIN_PROJECT_ID,
    },
)
stdout, stderr = process.communicate()
# Check for any errors
if process.returncode != 0:
    print("Error:", stderr.decode())
    exit(1)
else:
    print("cloc_write_database.js script executed successfully.")


# Connect to the MongoDB database

# print("Connecting to database...")
# client = MongoClient(DB_CONNECTION_STRING, server_api=ServerApi("1"))
# try:
#     client.admin.command("ping")
#     print("Connected to database successfully.")
# except Exception as e:
#     print(e)

# print("Updating lines of code...")
# with pymongo_timeout(5):
#     try:
#         result = client.get_database("prod").get_collection("projects").update_one(
#             {
#                 "_id": ObjectId(MAIN_PROJECT_ID),
#                 "stats": {"$elemMatch": {"name": "Lines of code"}},
#             },
#             {"$set": {"stats.$.value": total_lines_of_code}},
#         )
#         print("Lines of code updated successfully.")
#     except Exception as e:
#         print(e)
