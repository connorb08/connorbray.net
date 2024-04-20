#!/usr/bin/env python3
import boto3
import os
from dotenv import load_dotenv

# Get the directory of the script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Change the current working directory to the script directory
os.chdir(script_dir)

# Load dotenv and go to bash scripts
os.chdir("../../")
load_dotenv()

# Environment variables
DB_BACKUPS_ACCESS_KEY_ID = os.getenv("DB_BACKUPS_ACCESS_KEY_ID") or ""
DB_BACKUPS_ACCESS_KEY_SECRET = os.getenv("DB_BACKUPS_ACCESS_KEY_SECRET") or ""
BACKUP_BUCKET_NAME = "mongodb-backups"
KEEP_LATEST_N = 5

if DB_BACKUPS_ACCESS_KEY_ID == "":
    print("Please provide an access key to the bucket")
    exit(1)

if DB_BACKUPS_ACCESS_KEY_SECRET == "":
    print("Please provide an access key secret to the bucket")
    exit(1)


s3 = boto3.client(
    "s3",
    endpoint_url="https://e196c7973d299bda227cab878a1ca020.r2.cloudflarestorage.com",
    aws_access_key_id=DB_BACKUPS_ACCESS_KEY_ID,
    aws_secret_access_key=DB_BACKUPS_ACCESS_KEY_SECRET,
)

backups = s3.list_objects(Bucket=BACKUP_BUCKET_NAME)["Contents"]
backups.sort(reverse=True, key=lambda x: x["LastModified"])
backup_names = [x["Key"] for x in backups]

for backup in backup_names[KEEP_LATEST_N:]:
    print(f"Deleting backup {backup}")
    s3.delete_object(Bucket=BACKUP_BUCKET_NAME, Key=backup)
