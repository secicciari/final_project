CREATE TABLE wine (
	country TEXT NOT NULL,
	points INT,
	variety TEXT,
	winery TEXT,
	winery_country TEXT
);

CREATE TABLE weather (
	winery_search TEXT NOT NULL,
	avg_temp NUMERIC NOT NULL,
	avg_airp NUMERIC NOT NULL,
	avg_humid NUMERIC NOT NULL,
	avg_precip NUMERIC NOT NULL
);

CREATE TABLE machine (
	winery TEXT NOT NULL,
	country TEXT NOT NULL,
	points INT,
	variety TEXT,
	winery_search TEXT NOT NULL,
	avg_temp NUMERIC NOT NULL,
	avg_airp NUMERIC NOT NULL,
	avg_humid NUMERIC NOT NULL,
	avg_precip NUMERIC NOT NULL
);

CREATE TABLE uscounty (
	zip INT NOT NULL,
	lat INT NOT NULL,
	lng INT NOT NULL,
	city TEXT,
	state_id TEXT,
	state_name TEXT,
	county_name TEXT,
	avg_temp NUMERIC,
	avg_airp NUMERIC,
	avg_humid NUMERIC,
	avg_precip NUMERIC
);

CREATE TABLE weather_mapscaled (
	winery_search_term TEXT NOT NULL,
	lat INT NOT NULL,
	lng INT NOT NULL,
	avg_temp NUMERIC,
	avg_airp NUMERIC,
	avg_humid NUMERIC,
	avg_precip NUMERIC,
	country TEXT NOT NULL,
	points INT,
	variety TEXT,
	winery TEXT NOT NULL
);


DROP TABLE wine;
DROP TABLE weather;
DROP TABLE machine;
DROP TABLE uscounty;

SELECT * FROM wine;
---- 55446 rows

SELECT * FROM weather;
---- 7892 rows

SELECT * FROM machine;
---- 52906 rows

SELECT * FROM uscounty;
---- 1797 rows

SELECT * FROM weather_mapscaled;
---- 52906 rows

SELECT winery, country, points, variety, winery_search, avg_temp, avg_airp, avg_humid, avg_precip
FROM wine AS wi, weather AS we 
WHERE wi.winery_country = we.winery_search;
---- 52906 rows

SELECT winery, country, points, variety, winery_search, avg_temp, avg_airp, avg_humid, avg_precip
FROM weather AS we, wine AS wi  
WHERE we.winery_search = wi.winery_country;
---- 52906 rows

SELECT winery, country, points, variety, winery_search, avg_temp, avg_airp, avg_humid, avg_precip
FROM wine
INNER JOIN weather 
ON (wine.winery_country = weather.winery_search);
---- 52906 rows

SELECT winery, country, points, variety, winery_search, avg_temp, avg_airp, avg_humid, avg_precip
FROM wine
LEFT JOIN weather 
ON (wine.winery_country = weather.winery_search);
---- 55446 rows

SELECT winery, country, points, variety, winery_search, avg_temp, avg_airp, avg_humid, avg_precip
FROM wine
RIGHT JOIN weather 
ON (wine.winery_country = weather.winery_search);
----  52906 rows

SELECT winery, country, points, variety, winery_search, avg_temp, avg_airp, avg_humid, avg_precip
FROM wine
FULL OUTER JOIN weather 
ON (wine.winery_country = weather.winery_search);
---- 5546 rows
	
SELECT DISTINCT winery FROM wine;

SELECT DISTINCT winery_search FROM wine;

SELECT DISTINCT country FROM wine;