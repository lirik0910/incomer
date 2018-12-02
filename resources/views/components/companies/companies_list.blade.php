@foreach($items as $item)
    @include('components.companies.companies_item', ['item' => $item])
@endforeach
{{ $items->links() }}
@isset($items)
    {{ $items->links() }}
@endisset
