echo -------------------------------
echo -------------------------------
echo ----MONGO----
Test-NetConnection -ComputerName 10.128.145.135 -Port 27017
Test-NetConnection -ComputerName 10.128.145.46 -Port 27017
Test-NetConnection -ComputerName 10.128.145.47 -Port 27017
echo ----MONGO_DEV----
Test-NetConnection -ComputerName 10.128.145.196 -Port 27017
Test-NetConnection -ComputerName 10.128.145.197 -Port 27017
Test-NetConnection -ComputerName 10.128.145.198 -Port 27017
echo ----REDIS----
Test-NetConnection -ComputerName 10.128.124.40 -Port 6379
Test-NetConnection -ComputerName 10.128.124.41 -Port 6379
echo ----REDIS_DEV----
Test-NetConnection -ComputerName 10.240.9.129 -Port 6379
Test-NetConnection -ComputerName 10.240.9.145 -Port 6379
Test-NetConnection -ComputerName 10.240.9.140 -Port 6379
echo ----SQL----
Test-NetConnection -ComputerName CL-HSQLECOM03.dc.nova -Port 1003
pause