import type { Cliente } from "$lib/interfaces/cliente";
import { writable, type Writable } from "svelte/store";

export const clientesStore: Writable<Cliente[]> = writable([]);