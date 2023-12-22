## Deploy App [/deployapp]
[Back to Source](../README.md)

Suppose you have developed a web application and you need a platform to host it. Azure App Services can provide a managed platform to deploy web apps without managing the underlying infrastructure.

### Service App Showcase

![Alt text](image-4.png)

### Is the Website deployed ? (yes)

![Alt text](image-5.png)

### Export Template

```
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "sites_nodejs_app_student_iot_2023_h3hitema_name": {
            "defaultValue": "nodejs-app-student-iot-2023-h3hitema",
            "type": "String"
        },
        "serverfarms_nodejs_app_student_iot_2023_h3hitema_externalid": {
            "defaultValue": "/subscriptions/11e0e5a0-b9aa-4d16-9b10-cc9d55d62155/resourceGroups/cloud-shell-storage-westeurope/providers/Microsoft.Web/serverfarms/nodejs-app-student-iot-2023-h3hitema",
            "type": "String"
        }
    },
    "variables": {},
    "resources": [
        {
            "type": "Microsoft.Web/sites",
            "apiVersion": "2023-01-01",
            "name": "[parameters('sites_nodejs_app_student_iot_2023_h3hitema_name')]",
            "location": "West Europe",
            "kind": "app",
            "properties": {
                "enabled": true,
                "hostNameSslStates": [
                    {
                        "name": "[concat(parameters('sites_nodejs_app_student_iot_2023_h3hitema_name'), '.azurewebsites.net')]",
                        "sslState": "Disabled",
                        "hostType": "Standard"
                    },
                    {
                        "name": "[concat(parameters('sites_nodejs_app_student_iot_2023_h3hitema_name'), '.scm.azurewebsites.net')]",
                        "sslState": "Disabled",
                        "hostType": "Repository"
                    }
                ],
                "serverFarmId": "[parameters('serverfarms_nodejs_app_student_iot_2023_h3hitema_externalid')]",
                "reserved": false,
                "isXenon": false,
                "hyperV": false,
                "vnetRouteAllEnabled": false,
                "vnetImagePullEnabled": false,
                "vnetContentShareEnabled": false,
                "siteConfig": {
                    "numberOfWorkers": 1,
                    "acrUseManagedIdentityCreds": false,
                    "alwaysOn": false,
                    "http20Enabled": false,
                    "functionAppScaleLimit": 0,
                    "minimumElasticInstanceCount": 0
                },
                "scmSiteAlsoStopped": false,
                "clientAffinityEnabled": true,
                "clientCertEnabled": false,
                "clientCertMode": "Required",
                "hostNamesDisabled": false,
                "customDomainVerificationId": "4712F96CAF992C67E1CEF5C55D839AA5E89905F29929A532195FD81ED4099409",
                "containerSize": 0,
                "dailyMemoryTimeQuota": 0,
                "httpsOnly": false,
                "redundancyMode": "None",
                "storageAccountRequired": false,
                "keyVaultReferenceIdentity": "SystemAssigned"
            }
        },
        {
            "type": "Microsoft.Web/sites/basicPublishingCredentialsPolicies",
            "apiVersion": "2023-01-01",
            "name": "[concat(parameters('sites_nodejs_app_student_iot_2023_h3hitema_name'), '/ftp')]",
            "location": "West Europe",
            "dependsOn": [
                "[resourceId('Microsoft.Web/sites', parameters('sites_nodejs_app_student_iot_2023_h3hitema_name'))]"
            ],
            "properties": {
                "allow": true
            }
        },
        {
            "type": "Microsoft.Web/sites/basicPublishingCredentialsPolicies",
            "apiVersion": "2023-01-01",
            "name": "[concat(parameters('sites_nodejs_app_student_iot_2023_h3hitema_name'), '/scm')]",
            "location": "West Europe",
            "dependsOn": [
                "[resourceId('Microsoft.Web/sites', parameters('sites_nodejs_app_student_iot_2023_h3hitema_name'))]"
            ],
            "properties": {
                "allow": true
            }
        },
        {
            "type": "Microsoft.Web/sites/config",
            "apiVersion": "2023-01-01",
            "name": "[concat(parameters('sites_nodejs_app_student_iot_2023_h3hitema_name'), '/web')]",
            "location": "West Europe",
            "dependsOn": [
                "[resourceId('Microsoft.Web/sites', parameters('sites_nodejs_app_student_iot_2023_h3hitema_name'))]"
            ],
            "properties": {
                "numberOfWorkers": 1,
                "defaultDocuments": [
                    "Default.htm",
                    "Default.html",
                    "Default.asp",
                    "index.htm",
                    "index.html",
                    "iisstart.htm",
                    "default.aspx",
                    "index.php",
                    "hostingstart.html"
                ],
                "netFrameworkVersion": "v4.0",
                "phpVersion": "5.6",
                "nodeVersion": "~18",
                "requestTracingEnabled": false,
                "remoteDebuggingEnabled": false,
                "httpLoggingEnabled": true,
                "acrUseManagedIdentityCreds": false,
                "logsDirectorySizeLimit": 100,
                "detailedErrorLoggingEnabled": false,
                "publishingUsername": "$nodejs-app-student-iot-2023-h3hitema",
                "scmType": "None",
                "use32BitWorkerProcess": true,
                "webSocketsEnabled": false,
                "alwaysOn": false,
                "managedPipelineMode": "Integrated",
                "virtualApplications": [
                    {
                        "virtualPath": "/",
                        "physicalPath": "site\\wwwroot",
                        "preloadEnabled": false
                    }
                ],
                "loadBalancing": "LeastRequests",
                "experiments": {
                    "rampUpRules": []
                },
                "autoHealEnabled": false,
                "vnetRouteAllEnabled": false,
                "vnetPrivatePortsCount": 0,
                "localMySqlEnabled": false,
                "ipSecurityRestrictions": [
                    {
                        "ipAddress": "Any",
                        "action": "Allow",
                        "priority": 2147483647,
                        "name": "Allow all",
                        "description": "Allow all access"
                    }
                ],
                "scmIpSecurityRestrictions": [
                    {
                        "ipAddress": "Any",
                        "action": "Allow",
                        "priority": 2147483647,
                        "name": "Allow all",
                        "description": "Allow all access"
                    }
                ],
                "scmIpSecurityRestrictionsUseMain": false,
                "http20Enabled": false,
                "minTlsVersion": "1.2",
                "scmMinTlsVersion": "1.2",
                "ftpsState": "FtpsOnly",
                "preWarmedInstanceCount": 0,
                "elasticWebAppScaleLimit": 0,
                "functionsRuntimeScaleMonitoringEnabled": false,
                "minimumElasticInstanceCount": 0,
                "azureStorageAccounts": {}
            }
        },
        {
            "type": "Microsoft.Web/sites/deployments",
            "apiVersion": "2023-01-01",
            "name": "[concat(parameters('sites_nodejs_app_student_iot_2023_h3hitema_name'), '/4508baa18c8c49638f91b629867a85f3')]",
            "location": "West Europe",
            "dependsOn": [
                "[resourceId('Microsoft.Web/sites', parameters('sites_nodejs_app_student_iot_2023_h3hitema_name'))]"
            ],
            "properties": {
                "status": 4,
                "author_email": "N/A",
                "author": "ms-azuretools-vscode",
                "deployer": "ms-azuretools-vscode",
                "message": "Created via a push deployment",
                "start_time": "2023-12-20T15:29:08.9020066Z",
                "end_time": "2023-12-20T15:29:18.875495Z",
                "active": true
            }
        },
        {
            "type": "Microsoft.Web/sites/hostNameBindings",
            "apiVersion": "2023-01-01",
            "name": "[concat(parameters('sites_nodejs_app_student_iot_2023_h3hitema_name'), '/', parameters('sites_nodejs_app_student_iot_2023_h3hitema_name'), '.azurewebsites.net')]",
            "location": "West Europe",
            "dependsOn": [
                "[resourceId('Microsoft.Web/sites', parameters('sites_nodejs_app_student_iot_2023_h3hitema_name'))]"
            ],
            "properties": {
                "siteName": "nodejs-app-student-iot-2023-h3hitema",
                "hostNameType": "Verified"
            }
        }
    ]
}
```