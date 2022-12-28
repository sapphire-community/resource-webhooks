import { isObject } from '@sapphire/utilities';

export function loadState(key: LocalStorageKeys): LocalStorageEntry[] {
	const serializedState = localStorage.getItem(key);
	return serializedState ? JSON.parse(serializedState) : [];
}

export function saveState(key: LocalStorageKeys, state: LocalStorageEntry[]): LocalStorageEntry[] {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(key, serializedState);
	} catch {
		// intentionally empty
	}

	return state;
}

export function clearState(key: LocalStorageKeys) {
	localStorage.removeItem(key);
}

export function isLocalStorageEntry(entry: LocalStorageEntry | string): entry is LocalStorageEntry {
	return isObject(entry) && Boolean(entry.value) && Boolean(entry.label);
}

export enum LocalStorageKeys {
	WebhookUrls = 'webhook_urls'
}

export interface LocalStorageEntry {
	label: string;
	value: string;
}
