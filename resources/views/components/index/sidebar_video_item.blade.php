<li class="preview__item">
    <a class="preview__link" href="{{ $item->link }}" target="_blank">
        <img class="preview__img" src="{{ asset($item->preview_url) }}" alt="video-preview">
        <p class="preview__text">{{ $item->title }}</p>
        <button class="preview__btn">
            @include('svg.play')
        </button>
    </a>
</li>
