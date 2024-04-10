#!/usr/bin/env python3

import typer

app = typer.Typer(no_args_is_help=True)

@app.command()
def hello(name: str):
    typer.echo(f"Hello, {name}!")

@app.command()
def database():
    typer.echo(f"Connecting to database...")

if __name__ == "__main__":
    app()
