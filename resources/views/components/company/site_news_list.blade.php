@foreach($items as $item)
    @if($loop->first || $loop->iteration === 4)
        <div class="row">
            @include('components.index.hot_news_item', ['item' => $item, 'type' => 'short'])
    @elseif($loop->last || $loop->iteration % 3 === 0)
            @include('components.index.hot_news_item', ['item' => $item, 'type' => 'short'])
        </div>
    @else
        @include('components.index.hot_news_item', ['item' => $item, 'type' => 'short'])
    @endif
@endforeach

@isset($items)
    {{ $items->links() }}
@endisset
