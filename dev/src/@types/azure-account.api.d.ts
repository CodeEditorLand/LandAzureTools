/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { SubscriptionModels } from '@azure/arm-subscriptions';
import { TokenCredential } from '@azure/core-auth';
import { Environment } from '@azure/ms-rest-azure-env';
import { Event } from 'vscode';

export type AzureLoginStatus = 'Initializing' | 'LoggingIn' | 'LoggedIn' | 'LoggedOut';

export interface AzureAccountExtensionApi {
    readonly apiVersion: string;
    readonly status: AzureLoginStatus;
    readonly filters: AzureResourceFilter[];
    readonly sessions: AzureSession[];
    readonly subscriptions: AzureSubscription[];
    readonly onStatusChanged: Event<AzureLoginStatus>;
    readonly onFiltersChanged: Event<void>;
    readonly onSessionsChanged: Event<void>;
    readonly onSubscriptionsChanged: Event<void>;
    readonly waitForFilters: () => Promise<boolean>;
    readonly waitForLogin: () => Promise<boolean>;
    readonly waitForSubscriptions: () => Promise<boolean>;
    createCloudShell(os: 'Linux' | 'Windows'): CloudShell;
}

export interface AzureSession {
    readonly environment: Environment;
    readonly userId: string;
    readonly tenantId: string;

    /**
     * The credentials object for azure-sdk-for-js modules https://github.com/azure/azure-sdk-for-js
     */
    readonly credentials2: TokenCredential;
}

export interface AzureSubscription {
    readonly session: AzureSession;
    readonly subscription: SubscriptionModels.Subscription;
}

export type AzureResourceFilter = AzureSubscription;
