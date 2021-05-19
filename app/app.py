#Import tools
import os, json
from flask import Flask, render_template, redirect, jsonify

#Set up Flask
app = Flask(__name__)

#Define the route for the HTML page
@app.route("/")
def index():
   greeting = "Hello"
   try:
      mapenv = os.environ['API_KEY']
      greeting = mapenv + "!!!!!"
   except (RuntimeError, TypeError, NameError, ValueError, OSError, IOError):
      print("Oops!  That was no valid number.  Try again... greeting=" + greeting)
   
   return render_template("index.html", mapenv=mapenv)

if __name__ == "__main__":
   app.run(debug=True)