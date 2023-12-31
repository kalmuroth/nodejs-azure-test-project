# Small Azure Sandbox Project (Node Webapp)

Discovering Microsoft Azure Cloud Computing Services + Small Project (Upload Image, Third API Call, Multiple Trigger...)

App Service : https://nodejs-app-student-iot-2023-h3hitema.azurewebsites.net/

Front Door (CDN) : https://nodejs-frontend-student.azurefd.net

## Architecture

![Alt text](image.png)

## System requirements

<ul>
    <li>Node 16.0+</li>
</ul> 

## Getting Started

```git clone https://github.com/kalmuroth/api-mongodb && cd nodejs-azure-test-project && npm i```

```npm start```

(```http://localhost:3000/```)

## Usage

Once the dependencies are installed, you can run npm start to start the application. 
You will then be able to access it at localhost:3000 via HTTP request.

## Manipulation (Part 1 : Discovery)

### [Part I : Create A VM](manip/CreateVM.md)

### [Part II : Create A Bucket (+ Static Website)](manip/CreateBucket.md)

### [Part III : Deploy a Web App (NodeJS)](manip/DeployApp.md)

### [Part IV : Create a SQL Database (MongoDB)](manip/CreateDB.md)

### [Part V : Simple Azure Function (Third Party API Call)](manip/CreateFunction.md)

### [Part VI : Set Up a Networking ressource](manip/CreateNetwork.md)

### [Part VII : Configure Monitoring and Logging](manip/Monitoring.md) 

### [Part VIII : Implement Azure Identity by creating a simple dev role](manip/IdentityRole.md)

### [Part IX : Create a personalized Resource Group](manip/CreateGroup.md)

### [Part X : Set Up Auto-Scaling](manip/AutoScaling.md)

## Manipulation (Part 2 : Small Project)

### [Part I : Azure Cloud Function](manip/SecondFunction.md)

### [Part II : Azure Front Door](manip/FrontDoor.md)