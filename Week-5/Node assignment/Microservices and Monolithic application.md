# Monolitic Application :
In software engineering, a monolithic application describes a single-tiered software application in which the user interface and 
data access code are combined into a single program from a single platform. A monolithic application is self-contained, and independent 
from other computing applications.
#  Benefits of Monolithic Architecture :
#### 1.Simple to develop.
####  2.Simple to test. For example you can implement end-to-end testing by simply launching the application and
####  testing the UI with Selenium.
####  3.Simple to deploy. You just have to copy the packaged application to a server.
####  4.Simple to scale horizontally by running multiple copies behind a load balancer.
In eariler stages of the project it works very well but as the code base increases it is nearly impossible to understand the code.
Every large application today is being developed as a monolitic application in begining.
# Drawbacks of Monolithic Architecture
####  1.This simple approach has a limitation in size and complexity.
####  2.Application is too large and complex to fully understand and made changes fast and correctly.
####  3.The size of the application can slow down the start-up time.
####  4.You must redeploy the entire application on each update.
####  5.Impact of a change is usually not very well understood which leads to do extensive manual testing.
####  6.Continuous deployment is difficult.
####  7.Monolithic applications can also be difficult to scale when different modules have conflicting resource requirements.
####  8.Another problem with monolithic applications is reliability. Bug in any module (e.g. memory leak) can potentially bring down the
####  entire process. Moreover, since all instances of the application are identical, that bug will impact the availability of the entire application.
####  9.Monolithic applications has a barrier to adopting new technologies. Since changes in frameworks or languages will affect an entire
####   application it is extremely expensive in both time and cost.

# Microservices Architecture
The idea is to split your application into a set of smaller, interconnected services instead of building a single monolithic application. 
Each microservice is a small application that has its own hexagonal architecture consisting of business logic along with various adapters. 
Some microservices would expose a REST, RPC or message-based API and most services consume APIs provided by other services. 
Other microservices might implement a web UI.

! [microservice](https://cdn-images-1.medium.com/max/1600/0*nQZhIgz34givPDhY.png)
# Benefits of Microservices Architecture
####  1.It tackles the problem of complexity by decomposing application into a set of manageable services which are much faster to develop,
####   and much easier to understand and maintain.
####  2.It enables each service to be developed independently by a team that is focused on that service.
####  3.It reduces barrier of adopting new technologies since the developers are free to choose whatever technologies make sense for their 
####  service and not bounded to the choices made at the start of the project.
####  4.Microservice architecture enables each microservice to be deployed independently. As a result, it makes continuous deployment 
####  possible for complex applications.
####  5.Microservice architecture enables each service to be scaled independently.

#Drawbacks of Microservices Architecture
####  1.Microservices architecture adding a complexity to the project just by the fact that a microservices application is a distributed system. 
####  2.Testing a microservices application is also much more complex then in case of monolithic web application.
####  3.It is more difficult to implement changes that span multiple services. 
####  4.Deploying a microservices-based application is also more complex. 