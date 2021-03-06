#Import tools
import os, json
from flask import Flask, render_template, redirect, jsonify

#Set up Flask
app = Flask(__name__)

#Define the route for the HTML page
@app.route("/")
def index():
   mapenv = os.environ.get('API_KEY')

   return render_template("index.html", mapenv=mapenv)

if __name__ == "__main__":
   app.run(debug=True)