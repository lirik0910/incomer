@extends('layouts.app')
@section('content')
  <main class="main">
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
                          $pattern = explode('.', $topItem->preview_pattern)[1];
                      @endphp
                      @if($loop->first)
                          @include('components.news.patterns.' . $pattern, ['item' => $topItem])
                      @elseif($loop->iteration === 2)
                          <div class="top__article-wrap">
                              @include('components.news.patterns.' . $pattern, ['item' => $topItem])
                      @else
                              @include('components.news.patterns.' . $pattern, ['item' => $topItem])
                          </div>
                      @endif
                  @endforeach
            </div>
            <div class="popular">
              <p class="block__title">Актуально сейчас</p>
              <ul class="popular__list">
                  @foreach($currentNews as $currentItem)
                      @include('components.index.current_news_item', ['item' => $currentItem])
                  @endforeach
              </ul>
            </div>
          </div>
          <div class="news-wrap">
            <div class="news">
                @include('components.index.hot_news_list', ['items' => $hotNews])
            </div>
          </div>
        </div>
        <div class="sidebar-wrap">
          <div class="preview">
            <ul class="preview__list">
                @foreach($videos as $video)
                    @include('components.index.sidebar_video_item', ['item' => $video])
                @endforeach
            </ul>
          </div>
          <!--<div class="rating">
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
              <a class="rating__full-list" href="#">
                <span>Перейти к полному рейтингу</span>
                @include('svg.arrow')
              </a>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </main>
@endsection

