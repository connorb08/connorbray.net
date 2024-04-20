#!/usr/bin/env python3
import datetime
import boto3
from subprocess import Popen, PIPE
import os
from dotenv import load_dotenv
from zoneinfo import ZoneInfo

# Get the directory of the script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Change the current working directory to the script directory
os.chdir(script_dir)

# Load dotenv and go to bash scripts
os.chdir("../../")
load_dotenv()

# Environment variables
DB_CONNECTION_STRING = os.getenv("DB_CONNECTION_STRING") or ""
DB_BACKUPS_ACCESS_KEY_ID = os.getenv("DB_BACKUPS_ACCESS_KEY_ID") or ""
DB_BACKUPS_ACCESS_KEY_SECRET = os.getenv("DB_BACKUPS_ACCESS_KEY_SECRET") or ""

if DB_CONNECTION_STRING == "":
    print("Please provide a connection string to the database")
    exit(1)

if DB_BACKUPS_ACCESS_KEY_ID == "":
    print("Please provide an access key to the bucket")
    exit(1)

if DB_BACKUPS_ACCESS_KEY_SECRET == "":
    print("Please provide an access key secret to the bucket")
    exit(1)

# Constants
CURRENT_DATETIME = datetime.datetime.now(ZoneInfo("America/New_York")).strftime(
    "%I:%M%p-%B-%d-%Y"
)
BACKUP_BUCKET_NAME = "mongodb-backups"
DB_BACKUP_NAME = f"mongodb-prod-{CURRENT_DATETIME}.bak"
DB_BACKUP_LOCATION = f"/tmp/{DB_BACKUP_NAME}"


process = Popen(
    [
        "mongodump",
        "-d",
        "prod",
        "--uri",
        DB_CONNECTION_STRING,
        f"--archive={DB_BACKUP_LOCATION}",
        "--verbose",
    ],
    stdout=PIPE,
    stderr=PIPE,
)
stdout, stderr = process.communicate()
if process.returncode != 0:
    print("Error:", stderr.decode())
    exit(1)
else:
    print("mongodump executed successfully.")


s3 = boto3.client(
    "s3",
    endpoint_url="https://e196c7973d299bda227cab878a1ca020.r2.cloudflarestorage.com",
    aws_access_key_id=DB_BACKUPS_ACCESS_KEY_ID,
    aws_secret_access_key=DB_BACKUPS_ACCESS_KEY_SECRET,
)

print("Uploading backup to R2...")
with open(DB_BACKUP_LOCATION, "rb") as data:
    s3.upload_fileobj(data, BACKUP_BUCKET_NAME, DB_BACKUP_NAME)


# Remove backup file
process = Popen(["rm", "-rf", DB_BACKUP_LOCATION], stdout=PIPE, stderr=PIPE)
stdout, stderr = process.communicate()
if process.returncode != 0:
    print("Error:", stderr.decode())
    exit(1)
else:
    print("Local backup file removed.")
