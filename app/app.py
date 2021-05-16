#Import tools
import os, json
from decimal import Decimal, localcontext
from flask import Flask, render_template, redirect, jsonify
from flask_migrate import Migrate
#!/usr/bin/python
import psycopg2
import psycopg2.extras

#Set up Flask
app = Flask(__name__)

#Define the route for the HTML page
@app.route("/")
def index():
   return render_template("index.html")

if __name__ == "__main__":
   app.run(debug=True)