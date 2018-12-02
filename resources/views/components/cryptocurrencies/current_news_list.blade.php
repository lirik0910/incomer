@foreach($items as $item)
    @if($loop->iteration % 4 === 1)
        <div class="row">
            @include('components.index.hot_news_item', ['item' => $item, 'type' => 'short'])
            @elseif($loop->last || $loop->iteration % 4 === 0)
                @include('components.index.hot_news_item', ['item' => $item, 'type' => 'short'])
        </div>
    @else
        @include('components.index.hot_news_item', ['item' => $item, 'type' => 'short'])
    @endif
@endforeach
@isset($items)
    {{ $items->links() }}
@endisset
