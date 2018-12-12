<li class="news__item">
    <a class="news__link" target="_blank" href="{{ $item->link }}">
        <span class="news__time">{{ $dateFormatter::format($item->pub_date) }}</span>
        <p class="news__content">{{ $item->title }}</p>
        <span class="news__site">{{ $item->source }}</span>
    </a>
</li>
