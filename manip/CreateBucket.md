## Create Bucket [/createbucket]
[Back to Source](../README.md)

Consider a scenario where your application generates a large number of log files or images that need to be stored and accessed securely. Azure Blob Storage can be used to store such 
unstructured data.

### Bucket Showcase

![Alt text](image.png)

### Static Website Config

![Alt text](image-3.png)

### Export Template

```
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "storageAccounts_euwestfrancestudent_name": {
            "defaultValue": "euwestfrancestudent",
            "type": "String"
        }
    },
    "variables": {},
    "resources": [
        {
            "type": "Microsoft.Storage/storageAccounts",
            "apiVersion": "2023-01-01",
            "name": "[parameters('storageAccounts_euwestfrancestudent_name')]",
            "location": "francecentral",
            "sku": {
                "name": "Standard_RAGRS",
                "tier": "Standard"
            },
            "kind": "StorageV2",
            "properties": {
                "dnsEndpointType": "Standard",
                "defaultToOAuthAuthentication": false,
                "publicNetworkAccess": "Enabled",
                "allowCrossTenantReplication": false,
                "minimumTlsVersion": "TLS1_2",
                "allowBlobPublicAccess": false,
                "allowSharedKeyAccess": true,
                "networkAcls": {
                    "bypass": "AzureServices",
                    "virtualNetworkRules": [],
                    "ipRules": [],
                    "defaultAction": "Allow"
                },
                "supportsHttpsTrafficOnly": true,
                "encryption": {
                    "requireInfrastructureEncryption": false,
                    "services": {
                        "file": {
                            "keyType": "Account",
                            "enabled": true
                        },
                        "blob": {
                            "keyType": "Account",
                            "enabled": true
                        }
                    },
                    "keySource": "Microsoft.Storage"
                },
                "accessTier": "Hot"
            }
        },
        {
            "type": "Microsoft.Storage/storageAccounts/blobServices",
            "apiVersion": "2023-01-01",
            "name": "[concat(parameters('storageAccounts_euwestfrancestudent_name'), '/default')]",
            "dependsOn": [
                "[resourceId('Microsoft.Storage/storageAccounts', parameters('storageAccounts_euwestfrancestudent_name'))]"
            ],
            "sku": {
                "name": "Standard_RAGRS",
                "tier": "Standard"
            },
            "properties": {
                "changeFeed": {
                    "enabled": false
                },
                "restorePolicy": {
                    "enabled": false
                },
                "containerDeleteRetentionPolicy": {
                    "enabled": true,
                    "days": 7
                },
                "cors": {
                    "corsRules": []
                },
                "deleteRetentionPolicy": {
                    "allowPermanentDelete": false,
                    "enabled": true,
                    "days": 7
                },
                "isVersioningEnabled": false
            }
        },
        {
            "type": "Microsoft.Storage/storageAccounts/fileServices",
            "apiVersion": "2023-01-01",
            "name": "[concat(parameters('storageAccounts_euwestfrancestudent_name'), '/default')]",
            "dependsOn": [
                "[resourceId('Microsoft.Storage/storageAccounts', parameters('storageAccounts_euwestfrancestudent_name'))]"
            ],
            "sku": {
                "name": "Standard_RAGRS",
                "tier": "Standard"
            },
            "properties": {
                "protocolSettings": {
                    "smb": {}
                },
                "cors": {
                    "corsRules": []
                },
                "shareDeleteRetentionPolicy": {
                    "enabled": true,
                    "days": 7
                }
            }
        },
        {
            "type": "Microsoft.Storage/storageAccounts/queueServices",
            "apiVersion": "2023-01-01",
            "name": "[concat(parameters('storageAccounts_euwestfrancestudent_name'), '/default')]",
            "dependsOn": [
                "[resourceId('Microsoft.Storage/storageAccounts', parameters('storageAccounts_euwestfrancestudent_name'))]"
            ],
            "properties": {
                "cors": {
                    "corsRules": []
                }
            }
        },
        {
            "type": "Microsoft.Storage/storageAccounts/tableServices",
            "apiVersion": "2023-01-01",
            "name": "[concat(parameters('storageAccounts_euwestfrancestudent_name'), '/default')]",
            "dependsOn": [
                "[resourceId('Microsoft.Storage/storageAccounts', parameters('storageAccounts_euwestfrancestudent_name'))]"
            ],
            "properties": {
                "cors": {
                    "corsRules": []
                }
            }
        },
        {
            "type": "Microsoft.Storage/storageAccounts/blobServices/containers",
            "apiVersion": "2023-01-01",
            "name": "[concat(parameters('storageAccounts_euwestfrancestudent_name'), '/default/$web')]",
            "dependsOn": [
                "[resourceId('Microsoft.Storage/storageAccounts/blobServices', parameters('storageAccounts_euwestfrancestudent_name'), 'default')]",
                "[resourceId('Microsoft.Storage/storageAccounts', parameters('storageAccounts_euwestfrancestudent_name'))]"
            ],
            "properties": {
                "immutableStorageWithVersioning": {
                    "enabled": false
                },
                "defaultEncryptionScope": "$account-encryption-key",
                "denyEncryptionScopeOverride": false,
                "publicAccess": "None"
            }
        },
        {
            "type": "Microsoft.Storage/storageAccounts/blobServices/containers",
            "apiVersion": "2023-01-01",
            "name": "[concat(parameters('storageAccounts_euwestfrancestudent_name'), '/default/azure-webjobs-hosts')]",
            "dependsOn": [
                "[resourceId('Microsoft.Storage/storageAccounts/blobServices', parameters('storageAccounts_euwestfrancestudent_name'), 'default')]",
                "[resourceId('Microsoft.Storage/storageAccounts', parameters('storageAccounts_euwestfrancestudent_name'))]"
            ],
            "properties": {
                "immutableStorageWithVersioning": {
                    "enabled": false
                },
                "defaultEncryptionScope": "$account-encryption-key",
                "denyEncryptionScopeOverride": false,
                "publicAccess": "None"
            }
        },
        {
            "type": "Microsoft.Storage/storageAccounts/blobServices/containers",
            "apiVersion": "2023-01-01",
            "name": "[concat(parameters('storageAccounts_euwestfrancestudent_name'), '/default/azure-webjobs-secrets')]",
            "dependsOn": [
                "[resourceId('Microsoft.Storage/storageAccounts/blobServices', parameters('storageAccounts_euwestfrancestudent_name'), 'default')]",
                "[resourceId('Microsoft.Storage/storageAccounts', parameters('storageAccounts_euwestfrancestudent_name'))]"
            ],
            "properties": {
                "immutableStorageWithVersioning": {
                    "enabled": false
                },
                "defaultEncryptionScope": "$account-encryption-key",
                "denyEncryptionScopeOverride": false,
                "publicAccess": "None"
            }
        },
        {
            "type": "Microsoft.Storage/storageAccounts/fileServices/shares",
            "apiVersion": "2023-01-01",
            "name": "[concat(parameters('storageAccounts_euwestfrancestudent_name'), '/default/function-student-master-iot-franceb592')]",
            "dependsOn": [
                "[resourceId('Microsoft.Storage/storageAccounts/fileServices', parameters('storageAccounts_euwestfrancestudent_name'), 'default')]",
                "[resourceId('Microsoft.Storage/storageAccounts', parameters('storageAccounts_euwestfrancestudent_name'))]"
            ],
            "properties": {
                "accessTier": "TransactionOptimized",
                "shareQuota": 5120,
                "enabledProtocols": "SMB"
            }
        },
        {
            "type": "Microsoft.Storage/storageAccounts/fileServices/shares",
            "apiVersion": "2023-01-01",
            "name": "[concat(parameters('storageAccounts_euwestfrancestudent_name'), '/default/function-trigger-run-mastera15c')]",
            "dependsOn": [
                "[resourceId('Microsoft.Storage/storageAccounts/fileServices', parameters('storageAccounts_euwestfrancestudent_name'), 'default')]",
                "[resourceId('Microsoft.Storage/storageAccounts', parameters('storageAccounts_euwestfrancestudent_name'))]"
            ],
            "properties": {
                "accessTier": "TransactionOptimized",
                "shareQuota": 5120,
                "enabledProtocols": "SMB"
            }
        }
    ]
}
```