@foreach($items as $item)
    @include('components.company.rss_item', ['item' => $item])
@endforeach

@isset($items)
    {{ $rss->links() }}
@endisset
