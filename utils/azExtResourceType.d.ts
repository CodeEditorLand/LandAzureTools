/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/

/**
 * Normalized type for Azure resources that uniquely identifies resource type for the purposes
 * of the Azure extensions
 */
export declare enum AzExtResourceType {
    AppServices = 'AppServices',
    AzureCosmosDb = 'AzureCosmosDb',
    ContainerApps = 'ContainerApps',
    ContainerAppsEnvironment = 'ContainerAppsEnvironment',
    FunctionApp = 'FunctionApp',
    PostgresqlServersFlexible = 'PostgresqlServersFlexible',
    PostgresqlServersStandard = 'PostgresqlServersStandard',
    StaticWebApps = 'StaticWebApps',
    StorageAccounts = 'StorageAccounts',
    VirtualMachines = 'VirtualMachines',

    // Below are not supported but have icons in the Resources extension
    ApiManagementService = 'ApiManagementService',
    ApplicationInsights = 'ApplicationInsights',
    AppServiceKubernetesEnvironment = 'AppServiceKubernetesEnvironment',
    AppServicePlans = 'AppServicePlans',
    AvailabilitySets = 'AvailabilitySets',
    BatchAccounts = 'BatchAccounts',
    CacheRedis = 'CacheRedis',
    ContainerRegistry = 'ContainerRegistry',
    ContainerServiceManagedClusters = 'ContainerServiceManagedClusters',
    CustomLocations = 'CustomLocations',
    DeviceIotHubs = 'DeviceIotHubs',
    DevTestLabs = 'DevTestLabs',
    Disks = 'Disks',
    EventGridDomains = 'EventGridDomains',
    EventGridEventSubscriptions = 'EventGridEventSubscriptions',
    EventGridTopics = 'EventGridTopics',
    EventHubNamespaces = 'EventHubNamespaces',
    FrontDoorAndCdnProfiles = 'FrontDoorAndCdnProfiles',
    Images = 'Images',
    KeyVaults = 'KeyVaults',
    KubernetesConnectedClusters = 'KubernetesConnectedClusters',
    LoadBalancers = 'LoadBalancers',
    LogicApp = 'LogicApp',
    LogicWorkflows = 'LogicWorkflows',
    ManagedIdentityUserAssignedIdentities = 'ManagedIdentityUserAssignedIdentities',
    MysqlServers = 'MysqlServers',
    NetworkApplicationGateways = 'NetworkApplicationGateways',
    NetworkApplicationSecurityGroups = 'NetworkApplicationSecurityGroups',
    NetworkInterfaces = 'NetworkInterfaces',
    NetworkLocalNetworkGateways = 'NetworkLocalNetworkGateways',
    NetworkPublicIpPrefixes = 'NetworkPublicIpPrefixes',
    NetworkRouteTables = 'NetworkRouteTables',
    NetworkSecurityGroups = 'NetworkSecurityGroups',
    NetworkVirtualNetworkGateways = 'NetworkVirtualNetworkGateways',
    NetworkWatchers = 'NetworkWatchers',
    NotificationHubNamespaces = 'NotificationHubNamespaces',
    OperationalInsightsWorkspaces = 'OperationalInsightsWorkspaces',
    OperationsManagementSolutions = 'OperationsManagementSolutions',
    PublicIpAddresses = 'PublicIpAddresses',
    ServiceBusNamespaces = 'ServiceBusNamespaces',
    ServiceFabricClusters = 'ServiceFabricClusters',
    ServiceFabricMeshApplications = 'ServiceFabricMeshApplications',
    SignalRService = 'SignalRService',
    SqlDatabases = 'SqlDatabases',
    SqlServers = 'SqlServers',
    VirtualMachineScaleSets = 'VirtualMachineScaleSets',
    VirtualNetworks = 'VirtualNetworks',
    WebHostingEnvironments = 'WebHostingEnvironments',
}

/**
 * Gets a normalized type for an Azure resource, accounting for the fact that some
 * Azure resources share values for type and/or kind
 * @param resource The resource to check the {@link AzExtResourceType} for
 * @returns The normalized Azure resource type
 */
export declare function getAzExtResourceType(resource: { type: string; kind?: string }): AzExtResourceType | undefined;
