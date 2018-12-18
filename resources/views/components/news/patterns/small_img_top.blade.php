@php
    if($item->images){
        $img = $item->images->where('pivot.type', 'top_preview')->first();

        if($img !== NULL && File::exists(public_path($img->url))){
            $img = asset($img->url);
        } else{
            $img = asset('img/placeholder.png');
        }
    } else{
        $img = asset('img/placeholder.png');
    }
@endphp
<a class="card card--square card--post" href="{{ url('/news/' . $item->id)}}">
    <article class="card__article">
        <div class="card__pic">
            <img src="{{ asset($img) }}">
        </div>
        <div class="card__content">
            <div class="card__text">
                <h3>{{ $item->title }}</h3>
            </div>
            <div class="card__statistic">
                <span class="views-post">{{ $item->views }}</span>
                @if(!empty($item->comments_count))<span class="comments-post">{{ $item->comments_count }}</span>@endif
            </div>
        </div>
    </article>
</a>
