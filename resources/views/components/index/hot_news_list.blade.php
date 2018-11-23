@foreach($items as $item)
    @if($loop->iteration < 3 ||  $loop->iteration > 5 && $loop->iteration < 8)
        @if($loop->iteration === 1 || $loop->iteration === 6)
            <div class="row">
                @endif
                @include('components.index.hot_news_item', ['type' => 'long', 'item' => $item])
                @if($loop->iteration === 2 || $loop->iteration === 7 ||$loop->iteration === 1 && $loop->count < 2  || $loop->iteration === 6 && $loop->count < 7)
            </div>
        @endif
    @elseif($loop->iteration > 2 && $loop->iteration < 6 || $loop->iteration > 7)
        @if($loop->iteration === 3 || $loop->iteration === 8)
            <div class="row">
                @endif
                @include('components.index.hot_news_item', ['type' => 'short', 'item' => $item])
                @if($loop->iteration === 5 || $loop->iteration === 10 || $loop->iteration === 3 && $loop->count < 4 ||$loop->iteration === 4 && $loop->count < 5 || $loop->iteration === 8 && $loop->count < 9 || $loop->iteration === 9 && $loop->count < 10)
            </div>
        @endif
    @endif
@endforeach
@isset($items)
    {{ $items->links() }}
@endisset
