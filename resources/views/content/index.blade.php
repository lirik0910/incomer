@extends('layouts.app')
@section('content')
  <div class="container">
    <div class="tag">
      <!--<ul class="tag__list">
        <li class="tag__item"><a class="tag__link" href="#">Газовый скандал</a></li>
        <li class="tag__item"><a class="tag__link" href="#">elections-scandal</a></li>
        <li class="tag__item"><a class="tag__link" href="#">Тим Кук</a></li>
        <li class="tag__item"><a class="tag__link" href="#">Facebook</a></li>
        <li class="tag__item"><a class="tag__link" href="#">Apple</a></li>
      </ul>-->
    </div>
    <div class="wrap">
      <div class="main-wrap">
        <div class="aticles-wrap">

            <div class="top">
                @foreach($topNews as $topItem)
                @php
                    //var_dump($topItem); die;
                    //var_dump($dateFormatter::format($topItem->publish_date)); die;

                @endphp
                    @if($loop->first)
                        <a class="card card--large" href="{{ url('/news/' . $topItem->id) }}">
                            <article class="card__article">
                                <div class="card__pic">
                                    <img src="img/man2.png">
                                </div>
                                <div class="card__content">
                                    <div class="card__text">
                                        <p class="card__subtitle">Cрочно в номер!</p>
                                        <p>{{ $topItem->title }}</p>
                                    </div>
                                    <div class="card__statistic">
                                        <span class="views">{{ $topItem->views }}</span>
                                        <span class="comments">{{ $topItem->comments_count }}</span>
                                    </div>
                                </div>
                            </article>
                        </a>
                    @endif
                @endforeach

            <div class="top__article-wrap">
                @foreach($topNews as $topItem)
                    @if($loop->iteration == 2)
                        <a class="card card--square card--post" href="{{ url('/news/' . $topItem->id)}}">
                            <article class="card__article">
                                <div class="card__pic">
                                    <img src="img/car.png">
                                </div>
                                <div class="card__content">
                                    <div class="card__text">
                                        <p>{{ $topItem->title }}</p>
                                    </div>
                                    <div class="card__statistic">
                                        <span class="views">{{ $topItem->views }}</span>
                                        <span class="comments">{{ $topItem->comments_count }}</span>
                                    </div>
                                </div>
                            </article>
                        </a>
                    @elseif($loop->last)
                        <a class="card card--square card--interview" href="{{ url('/news/' . $topItem->id)}}">
                            <article class="card__article">
                                <div class="card__pic">
                                    <img src="img/man.png">
                                </div>
                                <div class="card__content">
                                    <div class="card__text">
                                        <p class="card__subtitle">Интервью</p>
                                        <p class="card__name">{{ $topItem->title }}</p>
                                        <p class="card__position">AB–Invest, CEO</p>
                                    </div>
                                </div>
                            </article>
                        </a>
                    @endif
                @endforeach
            </div>
          </div>
          <div class="popular">
            <p class="block__title">Актуально сейчас</p>
            <ul class="popular__list">
                @foreach($currentNews as $currentItem)
                    <li class="popular__item">
                        <a class="popular__link" href="{{ url('/news/' . $currentItem->id) }}">
                            <span class="popular__date">{{ $dateFormatter::format($currentItem->publish_date) }}</span>
                            <p class="popular__text">{{ $currentItem->title }}</p>
                        </a>
                    </li>
                @endforeach
            </ul>
          </div>
        </div>
        <div class="news-wrap">
          <div class="news">
              @foreach($hotNews as $hotItem)
                  @if($loop->iteration < 3 ||  $loop->iteration > 5 && $loop->iteration < 8)
                      @if($loop->iteration === 1 || $loop->iteration === 6)
                          <div class="row">
                      @endif
                      @include('components.index.hot_news', ['type' => 'long', 'item' => $hotItem])
                      @if($loop->iteration === 2 || $loop->iteration === 7 ||$loop->iteration === 1 && $loop->count < 2  || $loop->iteration === 6 && $loop->count < 7)
                          </div>
                      @endif
                  @elseif($loop->iteration > 2 && $loop->iteration < 6 || $loop->iteration > 7)
                      @if($loop->iteration === 3 || $loop->iteration === 8)
                          <div class="row">
                      @endif
                      @include('components.index.hot_news', ['type' => 'short', 'item' => $hotItem])
                      @if($loop->iteration === 5 || $loop->iteration === 10 || $loop->iteration === 3 && $loop->count < 4 ||$loop->iteration === 4 && $loop->count < 5 || $loop->iteration === 8 && $loop->count < 9 || $loop->iteration === 9 && $loop->count < 10)
                          </div>
                      @endif
                  @endif
              @endforeach
          </div>
        </div>
      </div>
      <div class="sidebar-wrap">

        <div class="preview">
          <ul class="preview__list">
              <li class="preview__item">
                  <iframe width="300" height="170" src="https://www.youtube.com/embed/dqsiWlfXTq4" frameborder="0" allow="accelerometer; autoplay; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </li>
              <li class="preview__item">
                  <iframe width="300" height="170" src="https://www.youtube.com/embed/UzjuuRha01w" frameborder="0" allow="accelerometer; autoplay; picture-in-picture" allowfullscreen></iframe>
              </li>
              <!--<li class="preview__item">
                  <iframe width="300" height="170" src="https://www.youtube.com/embed/nVuHqdCj_HM" frameborder="0" allow="accelerometer; autoplay; picture-in-picture" allowfullscreen></iframe>
              </li>-->

            <li class="preview__item">
              <a class="preview__link" href="https://youtu.be/nVuHqdCj_HM" target="_blank">
                <img class="preview__img" src="img/placeholder.png" alt="video-preview">
                <p class="preview__text">Essentia – храните и продавайте свои персональные данные</p>
                <button class="preview__btn">
                  @include('svg.play')
                </button>
              </a>
            </li>
            <!--<li class="preview__item">
              <a class="preview__link" href="#">
                <img class="preview__img" src="img/placeholder.png" alt="video-preview">
                <p class="preview__text">Всё о презентации WWDC2018</p>
                <button class="preview__btn">
                  @include('svg.play')
                </button>
              </a>
            </li>-->

          </ul>
        </div>
        <div class="rating">
          <p class="block__title">Рейтинг компаний</p>
          <ul class="rating__term-list">
            <li class="rating__term">
              <a class="rating__term-link rating__term-link--active" href="#">месяц</a>
            </li>
            <li class="rating__term">
              <a class="rating__term-link" href="#">квартал</a>
            </li>
            <li class="rating__term">
              <a class="rating__term-link" href="#">полугодие</a>
            </li>
            <li class="rating__term">
              <a class="rating__term-link" href="#">год</a>
            </li>
          </ul>
          <div class="rating__tabs">
            <table class="rating__table rating__table--active">
              <tr class="rating__table-row">
                <th class="rating__table-header">№</th>
                <th class="rating__table-header">Компания</th>
                <th class="rating__table-header">за акцию</th>
                <th class="rating__table-header">рост, %</th>
              </tr>
              <tr class="rating__table-row">
                <td class="rating__table-cell">01</td>
                <td class="rating__table-cell">Apple</td>
                <td class="rating__table-cell">309</td>
                <td class="rating__table-cell">30.1</td>
              </tr>
              <tr class="rating__table-row">
                <td class="rating__table-cell">02</td>
                <td class="rating__table-cell">Microsoft</td>
                <td class="rating__table-cell">84</td>
                <td class="rating__table-cell">29.8</td>
              </tr>
              <tr class="rating__table-row">
                <td class="rating__table-cell">03</td>
                <td class="rating__table-cell">Tesla</td>
                <td class="rating__table-cell">921</td>
                <td class="rating__table-cell">27.9</td>
              </tr>
              <tr class="rating__table-row">
                <td class="rating__table-cell">04</td>
                <td class="rating__table-cell">Amazon</td>
                <td class="rating__table-cell">1089</td>
                <td class="rating__table-cell">27.6</td>
              </tr>
              <tr class="rating__table-row">
                <td class="rating__table-cell">05</td>
                <td class="rating__table-cell">Samsung</td>
                <td class="rating__table-cell">821</td>
                <td class="rating__table-cell">30.1</td>
              </tr>
              <tr class="rating__table-row">
                <td class="rating__table-cell">06</td>
                <td class="rating__table-cell">Huawei</td>
                <td class="rating__table-cell">95</td>
                <td class="rating__table-cell">30.1</td>
              </tr>
              <tr class="rating__table-row">
                <td class="rating__table-cell">07</td>
                <td class="rating__table-cell">Micron</td>
                <td class="rating__table-cell">309</td>
                <td class="rating__table-cell">30.1</td>
              </tr>
              <tr class="rating__table-row">
                <td class="rating__table-cell">08</td>
                <td class="rating__table-cell">Intel</td>
                <td class="rating__table-cell">902</td>
                <td class="rating__table-cell">30.1</td>
              </tr>
              <tr class="rating__table-row">
                <td class="rating__table-cell">09</td>
                <td class="rating__table-cell">Acer</td>
                <td class="rating__table-cell">721</td>
                <td class="rating__table-cell">30.1</td>
              </tr>
              <tr class="rating__table-row">
                <td class="rating__table-cell">10</td>
                <td class="rating__table-cell">Xiaomi</td>
                <td class="rating__table-cell">107</td>
                <td class="rating__table-cell">30.1</td>
              </tr>
            </table>
            <table class="rating__table">
              <tr class="rating__table-row">
                <th class="rating__table-header">№</th>
                <th class="rating__table-header">Компания</th>
                <th class="rating__table-header">за акцию</th>
                <th class="rating__table-header">рост, %</th>
              </tr>
              <tr class="rating__table-row">
                <td class="rating__table-cell">01</td>
                <td class="rating__table-cell">Apple</td>
                <td class="rating__table-cell">309</td>
                <td class="rating__table-cell">30.1</td>
              </tr>
            </table>
            <table class="rating__table">
              <tr class="rating__table-row">
                <th class="rating__table-header">№</th>
                <th class="rating__table-header">Компания</th>
                <th class="rating__table-header">за акцию</th>
                <th class="rating__table-header">рост, %</th>
              </tr>
              <tr class="rating__table-row">
                <td class="rating__table-cell">01</td>
                <td class="rating__table-cell">Apple</td>
                <td class="rating__table-cell">309</td>
                <td class="rating__table-cell">30.1</td>
              </tr>
            </table>
            <table class="rating__table">
              <tr class="rating__table-row">
                <th class="rating__table-header">№</th>
                <th class="rating__table-header">Компания</th>
                <th class="rating__table-header">за акцию</th>
                <th class="rating__table-header">рост, %</th>
              </tr>
              <tr class="rating__table-row">
                <td class="rating__table-cell">01</td>
                <td class="rating__table-cell">Apple</td>
                <td class="rating__table-cell">309</td>
                <td class="rating__table-cell">30.1</td>
              </tr>
            </table>
            <a class="rating__full-list" href="#">Перейти к рейтингу компаний</a>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection

