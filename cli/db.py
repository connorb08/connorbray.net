import typer

app = typer.Typer(no_args_is_help=True)


@app.command()
def backup():
    typer.echo("Backing up database...")
    exec(open("scripts/backup_db.py").read())
    typer.echo("Backup completed.")


@app.command()
def restore():
    typer.echo("Restoring database...")


if __name__ == "__main__":
    app()
