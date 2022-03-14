<script lang="ts">
    export let bgColor: string = "red";
    export let title: string = "Hello World";
    export let link: string = "/lorem-ipsum";
    export let i: number = 0;
</script>

<div class="flex h-screen bg-{bgColor}" id="slide-{String(i + 1)}">
    <p class="m-auto underline">
        <a href={link}> {title} </a>
    </p>
</div>
