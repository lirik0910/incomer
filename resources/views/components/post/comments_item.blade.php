<li class="comments__item">
    <div class="comments__rating">
        <!--<div class="comments__rating-wrap"><a class="comments__vote-up" href="#"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs><style>.cls-21{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:2px;}</style></defs><title>chevron</title><polyline class="cls-21" points="7.76 3.5 13.64 10.03 7.76 16.5"/></svg></a><span class="comments__vote-num" href="#">109</span><a class="comments__vote-down" href="#"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs><style>.cls-21{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:2px;}</style></defs><title>chevron</title><polyline class="cls-21" points="7.76 3.5 13.64 10.03 7.76 16.5"/></svg></a></div>-->
    </div>
    <div class="comments__content">
        <div class="comments__info"><a class="comments__author" href="#">{{ $item->user()->username }}</a>
            <div class="comments__date"><span>{{ $dateFormatter::format($item->created_at) }}</span>
                <!--<time>12:45</time>-->
            </div>
        </div>
        <div class="comments__text">
            <p>{{ $item->value }}</p>
        </div>
    </div>
</li>
