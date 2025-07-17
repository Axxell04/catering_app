<script lang="ts">
    import CardCliente from "$lib/components/CardCliente.svelte";
	import { clientesStore } from "$lib/stores/clientesStore";
    import Icon from "@iconify/svelte";

    let newClientName = $state("");

    async function registerClient () {
        const res = await fetch("http://localhost:8000/clients/store", {
            method: "POST",
            body: JSON.stringify({
                "nombre": newClientName
            })
        })
        
    }

</script>

<div>
    <div class="">
        <form class="flex flex-col gap-4 border border-sky-200 p-3 rounded-2xl place-items-center" >
            <span>
                Nuevo cliente
            </span>
            <input bind:value={newClientName} type="text" class="border border-sky-200 rounded-md text-center outline-none" placeholder="Ingrese el nombre">
            <button class="bg-sky-200 py-2 px-5 rounded-xl hover:cursor-pointer"
            type="button"
            onclick={registerClient}
            >
                Registrar
            </button>
        </form>
    </div>
    <h2 class="p-2 text-center">
        Clientes
    </h2>
    <div class="flex flex-col gap-3 place-items-center">
        {#each $clientesStore as cliente}
            <CardCliente {cliente} />
        {/each}
        
    </div>
</div>