# Green Team Final Project

## Project overview

### Topic
Where are the best wines coming from - based on Wine Enthusiast reviews and weather data. 

### Reason for topic
We're sick of COVID data and wanted to analyze something a little more fun! We're excited for individuals to use our app to determine whether they should start a winery in their area.

### Questions we hope to answer
- What combination(s) of weather features (max temp, min temp, avg precipitation, snow totals) will lead to the best wines by variety (according to Wine Enthusiast ratings)?
- Can I grow a specific variety of grapes in a given zip code that will create great wine?

### Data source
Wine Enthusiast data: https://www.kaggle.com/zynicide/wine-reviews
Weather data from NOAA

## Communication protocols
Our main tool for communicating as a group will be Slack. To get in contact urgently we exchanged phone numbers and emails.

## Segment 1 roles
- Square (repo, updating documentation, eda): Sam
- Triangle (ML model mock-up): Katie & Andrew
- Circle (database): Renata
- X (tools): we'll decide on tools as a team

## High level overview of process
- identify weather data to be pulled from NOAA for inputs (match country or region from wine data)
- clean weather data and wine data 
- merge weather data and wine data to create input table for ML model
-- quarterly avg precipitation 
-- quarterly avg high temp
-- quarterly avg low temp
-- total snow
-- Target is high score by variety (we're defining high score by >94 points)
-- X is all weather data
- Output: a Flask app where the user can input their zip code and choose their wine type (Merlot, Cab, etc.) - the output is the weather data and whether our model recommends whether to grow grapes of that variety in that zip code
