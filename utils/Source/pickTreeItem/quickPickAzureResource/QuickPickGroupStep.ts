/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from "vscode";

import {
	AzureResourceQuickPickWizardContext,
	GroupQuickPickOptions,
} from "../../../index";
import { parseContextValue } from "../../utils/contextUtils";
import { GenericQuickPickStep } from "../GenericQuickPickStep";
import { PickFilter } from "../PickFilter";

export class QuickPickGroupStep extends GenericQuickPickStep<
	AzureResourceQuickPickWizardContext,
	GroupQuickPickOptions
> {
	public constructor(
		tdp: vscode.TreeDataProvider<unknown>,
		options: GroupQuickPickOptions,
	) {
		super(
			tdp,
			{
				...options,
				skipIfOne: true, // Group is always skip-if-one
			},
			{
				// Define id so that recently used picks are tracked separately for each group type
				id: `QuickPickGroupStep/${options.groupType?.sort().join(",") ?? ""}`,
			},
		);
	}

	protected readonly pickFilter: PickFilter = new GroupPickFilter(
		this.pickOptions,
	);
}

class GroupPickFilter implements PickFilter {
	constructor(private readonly pickOptions: GroupQuickPickOptions) {}

	isFinalPick(_node: vscode.TreeItem): boolean {
		// Group is never a direct pick
		return false;
	}

	isAncestorPick(node: vscode.TreeItem): boolean {
		const contextValues = parseContextValue(node.contextValue);

		return (
			!this.pickOptions.groupType ||
			!contextValues.includes("azureResourceTypeGroup") ||
			this.pickOptions.groupType.some((groupType) =>
				contextValues.includes(groupType),
			)
		);
	}
}
