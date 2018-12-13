@php
//var_dump($item->fields->where('field_type.title', 'ticker')->first()); die;
    if($item->fields){
        $img = $item->fields->where('field_type.title', 'logo')->first();
        if($img !== NULL && File::exists(public_path($img->url))){
            $img = $img->value;
        } else{
            $img = asset('img/placeholder.png');
        }
    }
@endphp
<li class="companies__item">
    <a class="companies__link" href="{{ url('companies/'.$item->id ) }}">
        <div class="companies__info">
            <div class="companies__img">
                <img src="{{ $img }}" alt="company-logo">
            </div>
            <div class="companies__text">
                <span class="companies__title">{{ $item->name }}</span>
                <span class="companies__subtitle">@if($item->fields->where('field_type.title', 'subtitle')->first()){{ $item->fields->where('field_type.title', 'subtitle')->first()->value }} @endif</span>
            </div>
        </div>
        <div class="companies__stock">
            <span class="companies__stock-description">Капитализация</span>
            <span class="companies__stock-value companies__stock-value--sort">${{ $item->capitalize }}</span>
            <span class="companies__stock-description">Акции в обращении</span>
            <span class="companies__stock-value">@if($item->fields->where('field_type.title', 'shares_in_circulation')->first()){{ $item->fields->where('field_type.title', 'shares_in_circulation')->first()->value }} @endif</span>
        </div>
        <div class="companies__visualisation">
            <div class="companies__chart company_item_chart" id="company_chart_{{$item->id}}" data-content="{{$item->chart}}"></div>
            <div class="companies__rating companies__rating--increase">
                {{--@include('svg.arrow')--}}
                <span class="companies__rating-value">${{ number_format($item->lastPrice, 2, '.', '') }}</span>
            </div>
        </div>
    </a>
</li>
