#!/usr/bin/env bash
mongodump -d "prod" --uri=$DB_CONNECTION_STRING --archive="prod.backup" --verbose
