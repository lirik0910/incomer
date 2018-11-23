@if($paginator->hasPages())
    @if ($paginator->hasMorePages())
        <button href="{{ $paginator->nextPageUrl() }}" rel="next" class="more">Показать еще</button>
    @endif
@endif

