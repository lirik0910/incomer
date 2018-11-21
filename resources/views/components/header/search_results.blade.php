<div class="search__info">
    @foreach($results as $name => $items)
        @include('components.header.search_results_list', ['name' => $name, 'items' => $items])
    @endforeach
</div>
