@php
//var_dump($item->fields->where('field_type.title', 'ticker')->first()); die;
    if($item->fields){
        $img = $item->fields->where('field_type.title', 'logo')->first();
        if($img !== NULL && File::exists(public_path($img->url))){
            $img = $img->value;
        } else{
            $img = 'img/placeholder.jpg';
        }
    }
@endphp
<li class="companies__item">
    <a class="companies__link" href="{{ url('companies/' ) }}">
        <div class="companies__info">
            <div class="companies__img">
                <img src="img/tesla.png" alt="company-logo">
            </div>
            <div class="companies__text">
                <span class="companies__title">{{ $item->name }}</span>
                <span class="companies__subtitle">NASDAQ: TSLA</span>
            </div>
        </div>
        <div class="companies__stock">
            <span class="companies__stock-description">Капитализация</span>
            <span class="companies__stock-value companies__stock-value--sort">$53.708.000.000</span>
            <span class="companies__stock-description">Акции в обращении</span>
            <span class="companies__stock-value">170.583.344</span>
        </div>
        <div class="companies__visualisation">
            <div class="companies__chart" id="chart-1"></div>
            <div class="companies__rating companies__rating--increase">
                @include('svg.arrow')
                <span class="companies__rating-value">314.86</span>
            </div>
        </div>
    </a>
</li>
