@foreach($items as $item)
    @include('components.companies.companies_item', ['item' => $item])
@endforeach

@isset($items)
{{--    {{ $items->links() }}--}}
@endisset
