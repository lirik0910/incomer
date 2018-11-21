<a class="card @if($type === 'long') card--long-full-img @else card--square-full-img @endif" href="{{ url('/news/' . $item->id) }}">
    <article class="card__article">
        <div class="card__pic">
            <img src="img/photo-light.jpg">
        </div>
        <div class="card__content">
            <div class="card__text">
                <p>{{ $item->title }}</p>
            </div>
            <div class="card__statistic">
                <span class="views">{{ $item->views }}</span>
                <span class="comments">{{ $item->comments_count }}</span>
            </div>
        </div>
    </article>
</a>
