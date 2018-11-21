<header class="header">
    <div class="container"><a class="logo" href="/">
            @include('svg.logo')
        </a>
        <nav class="header__nav">
            <ul class="header__nav-list">
                <li class="header__nav-item"><a class="header__nav-link @if($view === 'companies') header__nav-link--active @endif" href="{{ url('companies') }}">Компании</a>
                </li>
                <li class="header__nav-item"><a class="header__nav-link @if($view === 'blockchain') header__nav-link--active @endif" href="{{ url('blockchain') }}">Блокчейн</a></li>
                <li class="header__nav-item"><a class="header__nav-link @if($view === 'cryptocurrencies') header__nav-link--active @endif" href="{{ url('cryptocurrencies') }}">Криптовалюты</a></li>
                <!--<li class="header__nav-item"><a class="header__nav-link" href="#">Прогнозы</a></li>
                <li class="header__nav-item"><a class="header__nav-link" href="#">Треш</a></li>-->
            </ul>
        </nav>
        <div class="header__wrap">
            <div class="search">
                <form class="search__form">
                    <input class="search__input" type="search" placeholder="Поиск по сайту">
                    <button class="search__btn">
                        @include('svg.search')
                    </button>
                </form>
                <div class="search__results">
                    <div class="search__category">
                        <ul class="search__category-list">
                            <li class="search__category-item"><a
                                        class="search__category-link search__category-link--active"
                                        href="#">Всё</a><span class="search__category-count">307</span></li>
                            <li class="search__category-item"><a class="search__category-link" href="#">Новости</a><span
                                        class="search__category-count">306</span></li>
                            <li class="search__category-item"><a class="search__category-link"
                                                                 href="#">Компании</a><span
                                        class="search__category-count">0</span></li>
                            <li class="search__category-item"><a class="search__category-link" href="#">Люди</a><span
                                        class="search__category-count">1</span></li>
                            <li class="search__category-item"><a class="search__category-link"
                                                                 href="#">Продукты</a><span
                                        class="search__category-count">0</span></li>
                        </ul>
                    </div>
                    <div class="search__info">
                        <ul class="search__info-list search__info-list--active">
                            <li class="search__info-item"><a class="search__info-link" href="#">
                                    <div class="search__info-pic"><img class="search__info-img"
                                                                       src="/img/placeholder.png"></div>
                                    <div class="search__info-detail"><span class="search__info-category">Новости</span>
                                        <time class="search__info-time">Сегодня в 16:54</time>
                                        <div class="search__info-text">
                                            <p>Илон Маск заявил в личном твиттере о своей любви к аниме, после чего
                                                акции Tesla взлетели на 12%</p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="search__info-item"><a class="search__info-link" href="#">
                                    <div class="search__info-pic"><img class="search__info-img"
                                                                       src="/img/photo-light.jpg"></div>
                                    <div class="search__info-detail"><span class="search__info-category">Новости</span>
                                        <time class="search__info-time">Сегодня в 16:54</time>
                                        <div class="search__info-text">
                                            <p>Илон Маск заявил в личном твиттере о своей любви к аниме, после чего
                                                акции Tesla взлетели на 12%</p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="search__info-item"><a class="search__info-link" href="#">
                                    <div class="search__info-pic"><img class="search__info-img"
                                                                       src="/img/photo-dark.jpg"></div>
                                    <div class="search__info-detail"><span class="search__info-category">Новости</span>
                                        <time class="search__info-time">Сегодня в 16:54</time>
                                        <div class="search__info-text">
                                            <p>Илон Маск заявил в личном твиттере о своей любви к аниме, после чего
                                                акции Tesla взлетели на 12%</p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="search__info-item"><a class="search__info-link" href="#">
                                    <div class="search__info-pic"><img class="search__info-img"
                                                                       src="/img/placeholder.png"></div>
                                    <div class="search__info-detail"><span class="search__info-category">Новости</span>
                                        <time class="search__info-time">Сегодня в 16:54</time>
                                        <div class="search__info-text">
                                            <p>Илон Маск заявил в личном твиттере о своей любви к аниме, после чего
                                                акции Tesla взлетели на 12%</p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="search__info-item"><a class="search__info-link" href="#">
                                    <div class="search__info-pic"><img class="search__info-img"
                                                                       src="/img/placeholder.png"></div>
                                    <div class="search__info-detail"><span class="search__info-category">Новости</span>
                                        <time class="search__info-time">Сегодня в 16:54</time>
                                        <div class="search__info-text">
                                            <p>Илон Маск заявил в личном твиттере о своей любви к аниме, после чего
                                                акции Tesla взлетели на 12%</p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="search__info-item"><a class="search__info-link" href="#">
                                    <div class="search__info-pic"><img class="search__info-img"
                                                                       src="/img/placeholder.png"></div>
                                    <div class="search__info-detail"><span class="search__info-category">Новости</span>
                                        <time class="search__info-time">Сегодня в 16:54</time>
                                        <div class="search__info-text">
                                            <p>Илон Маск заявил в личном твиттере о своей любви к аниме, после чего
                                                акции Tesla взлетели на 12%</p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="search__info-item"><a class="search__info-link" href="#">
                                    <div class="search__info-pic"><img class="search__info-img"
                                                                       src="/img/placeholder.png"></div>
                                    <div class="search__info-detail"><span class="search__info-category">Новости</span>
                                        <time class="search__info-time">Сегодня в 16:54</time>
                                        <div class="search__info-text">
                                            <p>Илон Маск заявил в личном твиттере о своей любви к аниме, после чего
                                                акции Tesla взлетели на 12%</p>
                                        </div>
                                    </div>
                                </a></li>
                        </ul>
                        <ul class="search__info-list">
                            <li class="search__info-item"><a class="search__info-link" href="#">
                                    <div class="search__info-pic"><img class="search__info-img"
                                                                       src="/img/placeholder.png"></div>
                                    <div class="search__info-detail"><span class="search__info-category">Новости</span>
                                        <time class="search__info-time">Сегодня в 16:54</time>
                                        <div class="search__info-text">
                                            <p>Илон Маск заявил в личном твиттере о своей любви к аниме, после чего
                                                акции Tesla взлетели на 12%</p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="search__info-item"><a class="search__info-link" href="#">
                                    <div class="search__info-pic"><img class="search__info-img"
                                                                       src="/img/placeholder.png"></div>
                                    <div class="search__info-detail"><span class="search__info-category">Новости</span>
                                        <time class="search__info-time">Сегодня в 16:54</time>
                                        <div class="search__info-text">
                                            <p>Илон Маск заявил в личном твиттере о своей любви к аниме, после чего
                                                акции Tesla взлетели на 12%</p>
                                        </div>
                                    </div>
                                </a></li>
                        </ul>
                        <ul class="search__info-list">
                            <li class="search__info-item"><a class="search__info-link" href="#">
                                    <div class="search__info-pic"><img class="search__info-img"
                                                                       src="/img/placeholder.png"></div>
                                    <div class="search__info-detail"><span class="search__info-category">Новости</span>
                                        <time class="search__info-time">Сегодня в 16:54</time>
                                        <div class="search__info-text">
                                            <p>Илон Маск заявил в личном твиттере о своей любви к аниме, после чего
                                                акции Tesla взлетели на 12%</p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="search__info-item"><a class="search__info-link" href="#">
                                    <div class="search__info-pic"><img class="search__info-img"
                                                                       src="/img/placeholder.png"></div>
                                    <div class="search__info-detail"><span class="search__info-category">Новости</span>
                                        <time class="search__info-time">Сегодня в 16:54</time>
                                        <div class="search__info-text">
                                            <p>Илон Маск заявил в личном твиттере о своей любви к аниме, после чего
                                                акции Tesla взлетели на 12%</p>
                                        </div>
                                    </div>
                                </a></li>
                        </ul>
                        <ul class="search__info-list">
                            <li class="search__info-item"><a class="search__info-link" href="#">
                                    <div class="search__info-pic"><img class="search__info-img"
                                                                       src="/img/placeholder.png"></div>
                                    <div class="search__info-detail"><span class="search__info-category">Новости</span>
                                        <time class="search__info-time">Сегодня в 16:54</time>
                                        <div class="search__info-text">
                                            <p>Илон Маск заявил в личном твиттере о своей любви к аниме, после чего
                                                акции Tesla взлетели на 12%</p>
                                        </div>
                                    </div>
                                </a></li>
                        </ul>
                        <ul class="search__info-list">
                            <li class="search__info-item"><a class="search__info-link" href="#">
                                    <div class="search__info-pic"><img class="search__info-img"
                                                                       src="/img/placeholder.png"></div>
                                    <div class="search__info-detail"><span class="search__info-category">Новости</span>
                                        <time class="search__info-time">Сегодня в 16:54</time>
                                        <div class="search__info-text">
                                            <p>Илон Маск заявил в личном твиттере о своей любви к аниме, после чего
                                                акции Tesla взлетели на 12%</p>
                                        </div>
                                    </div>
                                </a></li>
                            <li class="search__info-item"><a class="search__info-link" href="#">
                                    <div class="search__info-pic"><img class="search__info-img"
                                                                       src="/img/placeholder.png"></div>
                                    <div class="search__info-detail"><span class="search__info-category">Новости</span>
                                        <time class="search__info-time">Сегодня в 16:54</time>
                                        <div class="search__info-text">
                                            <p>Илон Маск заявил в личном твиттере о своей любви к аниме, после чего
                                                акции Tesla взлетели на 12%</p>
                                        </div>
                                    </div>
                                </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="header__profile @if (Auth::check()) header__profile--login @endif">
                <div class="header__profile-wrap">
                    @include('svg.user')<span class="header__profile-title">
                        @if (Auth::guest())Авторизоваться
                        @else {{ Auth::user()->email }}
                        @endif</span>@include('svg.chevron')
                </div>
                <div class="header__profile-popup">
                    <ul class="header__profile-list">
                        <li class="header__profile-item"><a class="header__profile-link" href="#">Мой профиль</a>
                        </li>
                        <li class="header__profile-item"><a class="header__profile-link" href="#">Настройки</a></li>
                        <li class="header__profile-item"><a class="header__profile-link" href="/auth/logout">Выход</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>
