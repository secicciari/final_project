# Green Team Final Project

## Project overview

### Topic
Where are the best wines coming from - based on Wine Enthusiast reviews and weather data. 

### Reason for topic
We're sick of COVID data and wanted to analyze something a little more fun! We're excited for individuals to use our app to determine whether they should start a winery in their area.

### Questions we hope to answer
- What combination(s) of weather features (temperature, air pressure, precipitation, humidity) will lead to the best wines by variety (according to Wine Enthusiast ratings)?
- Which areas are best for growing each type of wine?

### Data source
* Wine Enthusiast data: https://www.kaggle.com/zynicide/wine-reviews
* Weather data from Open Weather's Statistical Weather Data API

## Communication protocols
Our main tool for communicating as a group will be Slack. To get in contact urgently we exchanged phone numbers and emails.
We're also using a Trello board to track our deliverables and outstanding questions: https://trello.com/b/GN9969Z9/green-team-final-project

## Presentation
[Google slides presentation](https://docs.google.com/presentation/d/1iJc0YSuN67khUssQ01zkHyiPY-Uq6k2cHVeM4RxGUvQ/edit?usp=sharing)

## Project Outline

### Machine Learning
- For the machine learning model mock-up (machine_mockup.ipynb) we chose to look at linear regression as well as ensemble learning models including Random Forest Classifier and Decision Tree Classifier to determine how accurate these models are on our datasets.
- We trained our model with the county name along with their success in having ideal weather parameters.
- We found a low accuracy with linear regression, a higher accuracy with random forest, and even higher with the decision tree classifier at almost 70%.  
- This model will work to take the ideal features (temperature, air pressure, precipitation, humidity) and determine if "Yes" the area meets ideal weather conditions for growing grapes for the purpose of wine production, or "No", the area does not meet this criteria.

### Project Database
A mockup database has been created using Postgres via AWS.  A file has been pushed to demonstrate this connection named "wine_pyspark.ipynb".
Small samples of our actual data were used to test this database. The datasets are included here on GitHub. 

### Data Exploration
Our data exploration is documented in winesweeper.ipynb (Resources/cleaning_notbeooks).
- We dropped all of the columns that will not be used in our analysis (such as wine description, taster name).
- We checked the number of unique values in our most important columns - variety, points, and country.
- We narrowed down the 12 wine varietals that have the most entries in our dataset. Of those 12, we chose to focus on the top 8 single-grape varietals (i.e., no “blends”) - Pinot Noir, Chardonnay, Cabernet Sauvignon, Riesling, Sauvignon Blanc, Syrah, Rosé, and Merlot.
- In order to get the weather data we needed, we had to find a way to identify latitudes and longitudes for each winery. Using our narrowed down dataset, we created a "winery_search" column by combining the winery name, the word "winery", and the country. We confirmed the number of unique wineries in our list (8,701) and used the unique search terms to get the geocoordinates for each winery from the Google Maps Places API. 


### Analysis

### Dashboard
Below is our v1 wireframe for our webpage.
![Mock Dashboard](https://github.com/secicciari/final_project/blob/main/Images/wine-project-wireframe.png)

#### Tools
- Heroku app 
- Leaflet for a map of the US

#### Interactive Elements
- Users can select the type of wine they're interested in from a drop down and the map will update to indicate areas where that wine grows well.
- Users can also search for a specific zip code to view the weather in that area and compare that to the weather we are displaying for top performing areas. 