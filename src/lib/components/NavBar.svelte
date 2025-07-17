<nav class="p-4 bg-sky-200">
    <ul class="flex flex-row gap-2 justify-center">
        <li>
            <a href="/" class="nav_item">
                Inicio
            </a>
        </li>
        <li>
            <a href="/menu" class="nav_item">
                Menu
            </a>
        </li>
        <li>
            <a href="/pedidos" class="nav_item">
                Pedidos
            </a>
        </li>
        <li>
            <a href="/clientes" class="nav_item">
                Clientes
            </a>
        </li>
        <li>
            <a href="/insumos" class="nav_item">
                Insumos
            </a>
        </li>
    </ul>
</nav>

<style>
    .nav_item {
        padding-top: calc(var(--spacing)*1);
        padding-bottom: calc(var(--spacing)*1);
        padding-inline: calc(var(--spacing)*2);
        border-bottom: 2px solid transparent;
    }
    .nav_item:hover {
        border-color: oklch(95.1% 0.026 236.824);
    }
</style>