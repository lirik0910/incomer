@foreach($items as $item)
    @php
        $day = $dateFormatter::day($item->pub_date);
    //    var_dump($date); die;
    @endphp
    @if($day === 'today')

    @elseif($day === 'yesterday')

    @elseif($day === 'before_yesterday')

    @else

    @endif
    @include('components.company.rss_item', ['item' => $item])
@endforeach

@isset($items)
    {{ $rss->links() }}
@endisset
