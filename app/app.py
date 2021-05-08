#Import tools
import os
from flask import Flask, render_template, redirect, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# Import RDS password
#from config import rds_pwd

#Set up Flask
app = Flask(__name__)

# Use SQLALCHEMY to set up Postgres connection
pg_user = "wineuser"
pg_pwd = "###########"
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://{username}:{password}@wine-final-project.czqkltznl3rl.us-east-2.rds.amazonaws.com/winedb".format(username=pg_user, password=pg_pwd)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)

class Weather(db.Model):
   __tablename__ = 'weather'

   winery = db.Column(db.String, primary_key=True)
   avg_temp = db.Column(db.Float)
   avg_airp = db.Column(db.Float)
   avg_humid = db.Column(db.Float)
   avg_precip = db.Column(db.Float)

   def __init__(self, winery: str, avg_temp: float, avg_airp: float, avg_humid: float, avg_precip: float):
      self.winery = winery
      self.avg_temp = avg_temp
      self.avg_airp = avg_airp
      self.avg_humid = avg_humid
      self.avg_precip = avg_precip

   def __repr__(self):
       return f'{self.winery}: Average Temperature = {self.avg_temp}; Average Air Pressure = {self.avg_airp}; Average Humidity= {self.avg_humid}; Average Precipitation = {self.avg_precip}<br>'


#Define the route for the HTML page
@app.route("/")
def index():
   return render_template("index.html")


#Define the route for the HTML page
# @app.route("/")
# def index():
   #return render_template("index.html")
   # weathers = Weather.query.all()
   # return '\n'.join([str(weather) for weather in weathers])

@app.route('/list_weather_db')
def list_weather_db():
   weathers = Weather.query.all()
   return '\n'.join([str(weather) for weather in weathers])

if __name__ == "__main__":
   app.run(debug=True)