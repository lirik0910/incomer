<li class="popular__item">
    <a class="popular__link" href="{{ url('/news/' . $item->id) }}">
        <span class="popular__date">{{ $dateFormatter::format($item->publish_date) }}</span>
        <p class="popular__text">{{ $item->title }}</p>
    </a>
</li>
