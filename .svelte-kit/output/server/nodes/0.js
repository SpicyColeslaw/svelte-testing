

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.ColSJjZ2.js","_app/immutable/chunks/scheduler.C55nVr2J.js","_app/immutable/chunks/index.Bt9MCtE8.js"];
export const stylesheets = [];
export const fonts = [];
