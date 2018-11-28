<ul class="search__info-list {{ $name }}">
    @foreach($items as $key => $item)
        @if($name === 'all')
            @foreach($item as $it)
                @include('components.header.search_results_item', ['item' =>$it])
            @endforeach
        @else
            @include('components.header.search_results_item', ['item' =>$item])
        @endif
    @endforeach
</ul>
