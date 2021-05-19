#Import tools
import os, json
from flask import Flask, render_template, redirect, jsonify

#Set up Flask
app = Flask(__name__)

#Define the route for the HTML page
@app.route("/")
def index():
   return render_template("index.html")

@app.route('/config')
def config():
   return jsonify(dict(os.environ)), 200

if __name__ == "__main__":
   app.run(debug=True)