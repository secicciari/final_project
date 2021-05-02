CREATE TABLE wine (
	country TEXT NOT NULL,
	points INT,
	province TEXT,
	region_1 TEXT,
	region_2 TEXT,
	title TEXT,
	variety TEXT,
	winery TEXT
);

CREATE TABLE weather (
	station TEXT NOT NULL,
	countyname TEXT NOT NULL,
	latitude NUMERIC(7, 5) NOT NULL,
	longitude NUMERIC(7, 5) NOT NULL,
	date DATE NOT NULL,
	tmax REAL NOT NULL,
	tmin REAL NOT NULL
);

DROP TABLE wine;
DROP TABLE weather;

SELECT * FROM wine;
SELECT * FROM weather;

SELECT DISTINCT region_2 FROM wine;

SELECT DISTINCT region_1 FROM wine;

SELECT DISTINCT province FROM wine;