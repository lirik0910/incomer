@foreach($items as $item)
    @include('components.index.hot_news_item', ['item' => $item, 'type' => 'short'])
@endforeach
