# Assesment-Task2# 

1- First run 'npm install' in project directory to install all the required dependencies.

3-Run 'node server.' in project directory to start the server.

4-Your server will start running at localhost:3030.

5-There are two collections Collection1 and Collection2.Once you send data to collection using post request and in request body message , day(mm/dd/year),time.

6.after data was inserted in Collection1 ,a cron job will be created which will schedule to transfer of data to Collection2 at the given timestamp in post request 
body of Collection1.

7.Data can be send to collection1 by sending a post request at localhost:3030/add and body for post request should be like 
{
message : some message,
day : mm/dd/yy,
time: hour:minute
}
