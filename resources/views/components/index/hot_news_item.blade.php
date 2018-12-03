@php
    if($item->images){
        $img = $item->images->where('pivot.type', 'preview')->first();

        if($img !== NULL && File::exists(public_path($img->url))){
            $img = asset($img->url);
        } else{
            $img = asset('img/photo-dark.jpg');
        }
    } else{
        $img = asset('img/photo-dark.jpg');
    }
@endphp
<a class="card @if($type === 'long') card--long-full-img @else card--square-full-img @endif" href="{{ url('/news/' . $item->id) }}" @if(isset($margin) && $margin === false ) style="margin-right: 0px" @endif>
    <article class="card__article">
        <div class="card__pic">
            <img src="{{ asset($img) }}">
        </div>
        <div class="card__content">
            <div class="card__text">
                <p>{{ $item->title }}</p>
            </div>
            <div class="card__statistic">
                <span class="views-post">{{ $item->views }}</span>
                <span class="comments-post">{{ $item->comments_count }}</span>
            </div>
        </div>
    </article>
</a>
