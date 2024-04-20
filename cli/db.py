import os
import typer
from typing_extensions import Annotated
from enum import Enum

app = typer.Typer(no_args_is_help=True)

class BackupOptions(str, Enum):
    create = "create"
    list = "list"
    clean = "clean"

@app.command()
def backup(action: Annotated[BackupOptions, "action"] = typer.Argument(..., help="Action to perform")):
    os.chdir(os.path.dirname(__file__))
    if action == "create":
        typer.echo("Creating database backup...")
        exec(open("scripts/backup_db.py").read())
    elif action == "list":
        typer.echo("Database backups:")
        exec(open("scripts/list_backups.py").read())
    elif action == "clean":
        typer.echo("Cleaning database backups...")
        exec(open("scripts/clean_backups.py").read())
    else:
        typer.echo("Invalid action.")

@app.command()
def restore():
    typer.echo("Restoring database...")


if __name__ == "__main__":
    app()
