@elseif($loop->iteration === 2 || $loop->iteration === 7)
@include('hot_news_item.blade.php', ['type' => 'long', 'item' => $hotItem])
</div>
@elseif($loop->iteration === 3 || $loop->iteration === 8)
    <div class="row">
        @include('components.index.hot_news.blade_item.php', ['type' => 'small', 'item' => $hotItem])
        @if($loop->count < 4 || $loop->count > 7 && $loop->count < 9)
    </div>
    @endif
    @elseif($loop->iteration === 5 || $loop->iteration === 10)
    @include('components.index.hot_news.blade_item.php', ['type' => 'small', 'item' => $hotItem])
    </div>
    @else
    @include('hot_news_item.blade.php', ['type' => 'small', 'item' => $hotItem])
    @if($loop->count < 5 || $loop->count > 3 && $loop->count < 10)
    </div>
@endif
