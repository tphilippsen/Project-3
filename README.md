# *Project 3* - Data Analysis and Visualization of Meteorite History

**[Click Here to view our Source](https://catalog.data.gov/dataset/meteorite-landings/resource/389dab1c-1e2e-4b13-83bf-d05a0219fe3e)** <br />
**Resources Utilized:** CSV, JSON  <br />
**Data Variables:** Name, Name ID, Mass (g), Fall, Year, Lat, Lon, Geolocation, Reclass  <br />

## Objective

Use this data to answer these questions: <br />
- Where are meteorites falling and being found? <br />
- What are the most commonly found types of meteorites? <br />
- Are there more meteorites being found now, compared to older-less populated century’s? <br />

## SQL Evaluation 

We utilized SQL to transform our dataset in various ways. We were able to create new categorizations within the data using multiple case statements.  The new columns we created were: Century, Size Group, Hemisphere and Classification Group. The code for this transformation can be seen in Meteorites.sql, and various corresponding data rollups can be found in the "SQL-Data-Outputs" Folder on our GitHub.

## Plotly 

Our group utilized Plotly to create interactive graphs that are included into our dashboard. The plotly.express function was used to create those graphs which include a bar chart for the Fell vs Found data. We created multiple graphs which analyzed the total number of meteorites that "Fell" and total number of metoerites that were "Found".  Also, we created a graph which looks at "Fell" and "Found" by each century. This bar chart was seperated into two, based on "Fell" and "Found" since the count numbers were so far apart. Additionally, we created an interactive pie chart which outlined the different types of meteorites and the percentage of each that was contained in our data. 

## Open Street Map

[ADD TEXT HERE]

## CSS & HTML

[ADD TEXT HERE]

## Analyze

From our data we were able to answer all of the questions in our objective.  For more information please see our PowerPoint saved in "Meteorites Project 3 Presentation.pptx" or on our dashboard saved in "index_v2.html"

## Data limitations 
- More data in past 200 years, compared to earlier years <br />
- More data points: Date, Country, Continent, etc. <br />

## If we had more time...

- We would add more variables to our map  <br />
** - Different colored markers for fell and found<br />
** - Clean up date format to show only year instead of MM-DD-YYYY, since data only has year <br />
- We would create more visuals in plotly utilizing the categories created in SQL <br />
