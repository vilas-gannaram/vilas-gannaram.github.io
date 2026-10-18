'use client';

import {
	Children,
	isValidElement,
	useId,
	useSyncExternalStore,
	type KeyboardEvent,
	type ReactNode,
} from 'react';

const STORAGE_KEY = 'code-tabs-label';
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
	listeners.add(listener);
	window.addEventListener('storage', listener);

	return () => {
		listeners.delete(listener);
		window.removeEventListener('storage', listener);
	};
}

function getSnapshot() {
	try {
		return localStorage.getItem(STORAGE_KEY);
	} catch {
		return null;
	}
}

function getServerSnapshot() {
	return null;
}

function savePreferredLabel(label: string) {
	try {
		localStorage.setItem(STORAGE_KEY, label);
	} catch {
		// Storage can be blocked; the preference just won't persist.
	}
	listeners.forEach((listener) => listener());
}

export default function CodeTabs({ labels, children }: ICodeTabsProps) {
	const id = useId();
	const tabLabels = JSON.parse(labels) as string[];
	const panels = Children.toArray(children).filter(isValidElement);
	const preferred = useSyncExternalStore(
		subscribe,
		getSnapshot,
		getServerSnapshot
	);
	const preferredIndex = preferred ? tabLabels.indexOf(preferred) : -1;
	const activeIndex = preferredIndex === -1 ? 0 : preferredIndex;

	const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
		const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
		if (!step) return;

		event.preventDefault();
		const next = (activeIndex + step + tabLabels.length) % tabLabels.length;
		savePreferredLabel(tabLabels[next]);
		document.getElementById(`${id}-tab-${next}`)?.focus();
	};

	return (
		<div className='code-tabs'>
			<div
				role='tablist'
				className='not-typeset flex gap-4 mb-2 font-sans text-sm font-medium'
			>
				{tabLabels.map((label, index) => (
					<button
						key={label}
						id={`${id}-tab-${index}`}
						type='button'
						role='tab'
						aria-selected={index === activeIndex}
						aria-controls={`${id}-panel-${index}`}
						tabIndex={index === activeIndex ? 0 : -1}
						onClick={() => savePreferredLabel(label)}
						onKeyDown={handleKeyDown}
						className={`cursor-pointer py-1 border-b-2 transition-all hover:text-foreground ${
							index === activeIndex
								? 'text-foreground border-foreground'
								: 'text-muted-foreground border-transparent'
						}`}
					>
						{label}
					</button>
				))}
			</div>
			{panels.map((panel, index) => (
				<div
					key={tabLabels[index]}
					id={`${id}-panel-${index}`}
					role='tabpanel'
					aria-labelledby={`${id}-tab-${index}`}
					hidden={index !== activeIndex}
				>
					{panel}
				</div>
			))}
		</div>
	);
}

interface ICodeTabsProps {
	labels: string;
	children: ReactNode;
}
