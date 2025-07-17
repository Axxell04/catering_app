<script lang="ts">
	import type { Cliente } from "$lib/interfaces/cliente";
	import Icon from "@iconify/svelte";

    interface Props {
        cliente: Cliente
    }

    let { cliente }:Props = $props();

    let editing = $state(false);
    let name = $state(cliente.nombre)


    // HTML Elements
    let inputName: HTMLInputElement | undefined = $state()

    // Functions
    function toggleEditing(state?: boolean) {
        if (state) {
            editing = state;
            
        } else {
            editing = !editing;

        };

        focusInputName();
    }

    function focusInputName () {
        if (!inputName) { return };
        inputName.focus();
        console.log(inputName)
    }

</script>
<div class="flex flex-row gap-2 bg-sky-200 rounded-xl p-3 w-fit place-content-center place-items-center">
    {#if editing}
    <input bind:this={inputName} id="name_client"  type="text" class="bg-sky-50 rounded-xl outline-none text-center"
    bind:value={name}
    >
    {:else}
    <span>
        {name}
    </span>
    {/if}
    <button 
    class="cursor-pointer"
    onclick={()=>toggleEditing()}
    >
        <Icon icon="material-symbols:edit" class="text-xl" />
    </button>
</div>