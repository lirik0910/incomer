<ul class="search__info-list {{ $name }}">
    @foreach($items as $item)
        @include('components.header.search_results_item', ['item' =>$item])
    @endforeach
</ul>
