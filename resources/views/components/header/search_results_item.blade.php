@php
    if($name === 'news' || $key === 'news'){
        $img = $item->images->where('pivot.type', 'preview')->first();
    }
@endphp

@if($name === 'news' || $key === 'news')
    <li class="search__info-item"><a class="search__info-link" href="{{ url('/news/' . $item->id) }}">
            <div class="search__info-pic">
                <img class="search__info-img" src="@if(isset($img)) {{ $img->url }} @else /img/placeholder.png @endif">
            </div>
            <div class="search__info-detail"><span class="search__info-category">Новости</span>
                <time class="search__info-time">{{ $item->publish_date ? $dateFormatter::format($item->publish_date) : '' }}</time>
                <div class="search__info-text">
                    <p>{{ $item->title }}</p>
                </div>
            </div>
        </a>
    </li>
@elseif($name === 'companies' || $key === 'companies')
    <li class="search__info-item"><a class="search__info-link" href="{{ url('/companies/' . $item->id) }}">
            <div class="search__info-pic">
                <img class="search__info-img" src="@if(isset($img)) {{ $img->url }} @else /img/placeholder.png @endif">
            </div>
            <div class="search__info-detail"><span class="search__info-category">Компании</span>
                <div class="search__info-text">
                    <p>{{ $item->name }}</p>
                </div>
            </div>
        </a>
    </li>
@endif
