@foreach($items as $item)
    @if($loop->first)
        <div class="row">
            @include('components.index.hot_news_item', ['item' => $item, 'type' => 'short'])
    @elseif($loop->last)
            @include('components.index.hot_news_item', ['item' => $item, 'type' => 'short'])
        </div>
    @elseif($loop->iteration === 5 || $loop->iteration === 9)
        <div class="row">
            @include('components.index.hot_news_item', ['item' => $item, 'type' => 'short'])
    @elseif($loop->iteration === $loop->count || $loop->iteration % 4 === 0)
            @include('components.index.hot_news_item', ['item' => $item, 'type' => 'short'])
        </div>
    @endif
@endforeach
@isset($items)
    {{ $items->links() }}
@endisset
