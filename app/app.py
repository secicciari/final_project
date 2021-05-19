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
      excited = os.environ['API_KEY']
      greeting = greeting + "!!!!!"
   except:
      pass
   
   return render_template("index.html", greeting=greeting)

if __name__ == "__main__":
   app.run(debug=True)