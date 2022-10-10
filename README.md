# Localization Animals
This project has been realized in Node.js with Express to configure the server that be use.

# install dependencies
 - execute: npm i

# Start server
 - execute npm run start

# Open your browser
 - localhost:3001
 your can view the message  "its live"

 - Open localhost:3001/getVulnerableAnimals to get ani

# Mocks
 src\mocks contains the mocks of the data# PruebaCIAT

 # utils
 src\libs\utils contains the general validations necessary to validate data. In the file "GeneralUtils" are the conversions between units of distance. A radius was used to delimit the zones and identify which animals are found in them.

 # Requirements 
 The test requested the development of a system that would allow identifying
 which animals are found in deforestation zones and which are not. For it, the information on the location of the animals and the coordinates of the deforestation zones were taken into account.

 - The system obtains the information from a mock up of manually established data of the animals and the deforestation zones.
 - The system must analyze the position of the animals with respect to the position of the deforestation zones and their extent.
 - The system must provide a URL where the information is easily displayed to the user.

 # Develop
 src\database\animals contains the program that resolve the problem raised.

 The distance between the animal and the area is taken into account, validating that if the distance is less than or equal to the radius previously calculated with the coordinates of the zones, means that the animal is within it. Having the information confirmed, it is stored in an array, each of the animals identified in one or more areas that can harm them and specific information about them is returned.

 The system is oriented to link to a database that contains and allows extracting the information to analyze, in this case, default data was defined in order to verify and validate that the information expected to be obtained is calculated
 in a correct way.