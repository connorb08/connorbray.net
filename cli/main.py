#!/usr/bin/env python3

import typer
import urllib.request

app = typer.Typer(no_args_is_help=True)


@app.command()
def hello(name: str):
    typer.echo(f"Hello, {name}!")


@app.command()
def database():
    typer.echo(f"Connecting to database...")
    external_ip = urllib.request.urlopen('https://ident.me').read().decode('utf8')
    print(external_ip)



if __name__ == "__main__":
    app()
