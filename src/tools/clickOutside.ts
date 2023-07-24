import type { Action } from "svelte/types/runtime/action";
/* eslint-disable @typescript-eslint/no-explicit-any */
export function clickOutside(node:HTMLElement): Action<HTMLElement, undefined> {
	// the node has been mounted in the DOM

	window.addEventListener('click', handleClick);

	function handleClick(this: Window, ev: MouseEvent) {	
		if (!node.contains(ev.target as Node)) {
			node.dispatchEvent(new CustomEvent('outsideclick'));
		}
	}
	

	return {
		destroy() {
			// the node has been removed from the DOM
			window.removeEventListener('click', handleClick);
		}
	};
}

