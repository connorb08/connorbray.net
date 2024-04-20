#!/usr/bin/env python3

import typer
import urllib.request
import db

app = typer.Typer(no_args_is_help=True)
app.add_typer(db.app, name="db")


@app.command()
def hello(name: str):
    typer.echo(f"Hello, {name}!")


@app.command()
def ip():
    external_ip = urllib.request.urlopen("https://ident.me").read().decode("utf8")
    typer.echo(external_ip)


if __name__ == "__main__":
    app()
