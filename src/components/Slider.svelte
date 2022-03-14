<script lang="ts">
    import Slide from "./Slide.svelte";
    const slides = [
        {
            bgColor: "blue-900",
            title: "Welcome to the Svelte presentation",
            link: "/lorem-ipsum",
        },
        {
            bgColor: "blue-700",
            title: "Welcome to the Svelte presentation",
            link: "/lorem-ipsum",
        },
        {
            bgColor: "blue-500",
            title: "Welcome to the Svelte presentation",
            link: "/lorem-ipsum",
        },
        {
            bgColor: "blue-300",
            title: "Welcome to the Svelte presentation",
            link: "/lorem-ipsum",
        },
    ];
</script>

<div id="slides" class="w-screen">
    {#each slides as slide, i}
        <Slide {...slide} {i} />
    {/each}
</div>
<div id="sidebar" class="h-screen pt-[44vh] fixed w-12 text-center">
    <ul>
        {#each slides as _link, i}
            <li>
                <a href="#slide-{String(i + 1)}">O</a>
            </li>
        {/each}
    </ul>
</div>
