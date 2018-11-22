@extends('layouts.app')
@section('content')
  <div class="container">
    <div class="wrap">
      <div class="companies">
        <div class="companies__sort">
          <span class="companies__sort-title">Тип сортировки:</span>
          <ul class="companies__sort-list">
            <li class="companies__sort-item"> 
              <a class="companies__sort-link" href="#" data-sort-value="original-order" data-sort-type="original-order">Origin</a>
            </li>
            <li class="companies__sort-item"> 
              <a class="companies__sort-link" href="#" data-sort-value="title" data-sort-type="original-order"> 
                <span>Алфавит</span>
                @include('svg.arrow')
              </a>
            </li>
            <li class="companies__sort-item"> 
              <a class="companies__sort-link" href="#" data-sort-value="rating" data-sort-type="original-order"> 
                <span>Рейтинг</span>
                @include('svg.arrow')
              </a>
            </li>
            <li class="companies__sort-item"> 
              <a class="companies__sort-link" href="#" data-sort-value="capitalization" data-sort-type="original-order"> 
                <span>Капитализация</span>
                @include('svg.arrow')
              </a>
            </li>
          </ul>
        </div>
        <div class="companies__catalog">
          <ul class="companies__list">
            <li class="companies__item">
              <a class="companies__link" href="#">
                <div class="companies__info">
                  <div class="companies__img">
                    <img src="img/tesla.png" alt="company-logo">
                  </div>
                  <div class="companies__text">
                    <span class="companies__title">Tesla</span>
                    <span class="companies__subtitle">NASDAQ: TSLA</span>
                  </div>
                </div>
                <div class="companies__stock">
                  <span class="companies__stock-description">Капитализация</span>
                  <span class="companies__stock-value companies__stock-value--sort">$53.708.000.000</span>
                  <span class="companies__stock-description">Акции в обращении</span>
                  <span class="companies__stock-value">170.583.344</span>
                </div>
                <div class="companies__visualisation">
                  <div class="companies__chart" id="chart-1"></div>
                  <div class="companies__rating companies__rating--increase">
                    @include('svg.arrow')
                    <span class="companies__rating-value">314.86</span>
                  </div>
                </div>
              </a>
            </li>
            <li class="companies__item">
              <a class="companies__link" href="#">
                <div class="companies__info">
                  <div class="companies__img">
                    <img src="img/tesla.png" alt="company-logo">
                  </div>
                  <div class="companies__text">
                    <span class="companies__title">Apple</span>
                    <span class="companies__subtitle">NASDAQ: APPL</span>
                  </div>
                </div>
                <div class="companies__stock">
                  <span class="companies__stock-description">Капитализация</span>
                  <span class="companies__stock-value companies__stock-value--sort">$9.708.000.000</span>
                  <span class="companies__stock-description">Акции в обращении</span>
                  <span class="companies__stock-value">170.583.344</span>
                </div>
                <div class="companies__visualisation">
                  <div class="companies__chart" id="chart-3"></div>
                  <div class="companies__rating companies__rating--reduce"> 
                    @include('svg.arrow')
                    <span class="companies__rating-value">310.91</span>
                  </div>
                </div>
              </a>
            </li>
            <li class="companies__item">
              <a class="companies__link" href="#">
                <div class="companies__info">
                  <div class="companies__img">
                    <img src="img/tesla.png" alt="company-logo">
                  </div>
                  <div class="companies__text">
                    <span class="companies__title">Microsoft</span>
                    <span class="companies__subtitle">NASDAQ: MS</span>
                  </div>
                </div>
                <div class="companies__stock">
                  <span class="companies__stock-description">Капитализация</span>
                  <span class="companies__stock-value companies__stock-value--sort">$53.708.000.000</span>
                  <span class="companies__stock-description">Акции в обращении</span>
                  <span class="companies__stock-value">170.583.344</span>
                </div>
                <div class="companies__visualisation">
                  <div class="companies__chart" id="chart-4"></div>
                  <div class="companies__rating companies__rating--increase">
                    @include('svg.arrow')
                    <span class="companies__rating-value">309.61</span>
                  </div>
                </div>
              </a>
            </li>
            <li class="companies__item">
              <a class="companies__link" href="#">
                <div class="companies__info">
                  <div class="companies__img">
                    <img src="img/tesla.png" alt="company-logo">
                  </div>
                  <div class="companies__text">
                    <span class="companies__title">Hewlett Packard</span>
                    <span class="companies__subtitle">NASDAQ: HWPD</span>
                  </div>
                </div>
                <div class="companies__stock">
                  <span class="companies__stock-description">Капитализация</span>
                  <span class="companies__stock-value companies__stock-value--sort">$50.708.000.000</span>
                  <span class="companies__stock-description">Акции в обращении</span>
                  <span class="companies__stock-value">170.583.344</span>
                </div>
                <div class="companies__visualisation">
                  <div class="companies__chart" id="chart-4"></div>
                  <div class="companies__rating companies__rating--increase">
                    @include('svg.arrow')
                    <span class="companies__rating-value">307.15</span>
                  </div>
                </div>
              </a>
            </li>
            <li class="companies__item">
              <a class="companies__link" href="#">
                <div class="companies__info">
                  <div class="companies__img">
                    <img src="img/tesla.png" alt="company-logo">
                  </div>
                  <div class="companies__text">
                    <span class="companies__title">Amazon</span>
                    <span class="companies__subtitle">NASDAQ: AMZN</span>
                  </div>
                </div>
                <div class="companies__stock">
                  <span class="companies__stock-description">Капитализация</span>
                  <span class="companies__stock-value companies__stock-value--sort">$53.708.000.000</span>
                  <span class="companies__stock-description">Акции в обращении</span>
                  <span class="companies__stock-value">170.583.344</span>
                </div>
                <div class="companies__visualisation">
                  <div class="companies__chart" id="chart-5"></div>
                  <div class="companies__rating companies__rating--increase">
                    @include('svg.arrow')
                    <span class="companies__rating-value">314.86</span>
                  </div>
                </div>
              </a>
            </li>
            <li class="companies__item">
              <a class="companies__link" href="#">
                <div class="companies__info">
                  <div class="companies__img">
                    <img src="img/tesla.png" alt="company-logo">
                  </div>
                  <div class="companies__text">
                    <span class="companies__title">Tesla</span>
                    <span class="companies__subtitle">NASDAQ: TSLA</span>
                  </div>
                </div>
                <div class="companies__stock">
                  <span class="companies__stock-description">Капитализация</span>
                  <span class="companies__stock-value companies__stock-value--sort">$23.708.000.000</span>
                  <span class="companies__stock-description">Акции в обращении</span>
                  <span class="companies__stock-value">170.583.344</span>
                </div>
                <div class="companies__visualisation">
                  <div class="companies__chart" id="chart-6"></div>
                  <div class="companies__rating companies__rating--increase">
                    @include('svg.arrow')
                    <span class="companies__rating-value">314.86</span>
                  </div>
                </div>
              </a>
            </li>
            <li class="companies__item">
              <a class="companies__link" href="#">
                <div class="companies__info">
                  <div class="companies__img">
                    <img src="img/tesla.png" alt="company-logo">
                  </div>
                  <div class="companies__text">
                    <span class="companies__title">Tesla</span>
                    <span class="companies__subtitle">NASDAQ: TSLA</span>
                  </div>
                </div>
                <div class="companies__stock">
                  <span class="companies__stock-description">Капитализация</span>
                  <span class="companies__stock-value companies__stock-value--sort">$53.708.000.000</span>
                  <span class="companies__stock-description">Акции в обращении</span>
                  <span class="companies__stock-value">170.583.344</span>
                </div>
                <div class="companies__visualisation">
                  <div class="companies__chart" id="chart-7"></div>
                  <div class="companies__rating companies__rating--reduce">
                    @include('svg.arrow')
                    <span class="companies__rating-value">314.86</span>
                  </div>
                </div>
              </a>
            </li>
            <li class="companies__item">
              <a class="companies__link" href="#">
                <div class="companies__info">
                  <div class="companies__img">
                    <img src="img/tesla.png" alt="company-logo">
                  </div>
                  <div class="companies__text">
                    <span class="companies__title">Tesla</span>
                    <span class="companies__subtitle">NASDAQ: TSLA</span>
                  </div>
                </div>
                <div class="companies__stock">
                  <span class="companies__stock-description">Капитализация</span>
                  <span class="companies__stock-value companies__stock-value--sort">$53.708.000.000</span>
                  <span class="companies__stock-description">Акции в обращении</span>
                  <span class="companies__stock-value">170.583.344</span>
                </div>
                <div class="companies__visualisation">
                  <div class="companies__chart" id="chart-8"></div>
                  <div class="companies__rating companies__rating--increase">
                    @include('svg.arrow')
                    <span class="companies__rating-value">314.86</span>
                  </div>
                </div>
              </a>
            </li>
            <li class="companies__item">
              <a class="companies__link" href="#">
                <div class="companies__info">
                  <div class="companies__img">
                    <img src="img/tesla.png" alt="company-logo">
                  </div>
                  <div class="companies__text">
                    <span class="companies__title">Tesla</span>
                    <span class="companies__subtitle">NASDAQ: TSLA</span>
                  </div>
                </div>
                <div class="companies__stock">
                  <span class="companies__stock-description">Капитализация</span>
                  <span class="companies__stock-value companies__stock-value--sort">$53.708.000.000</span>
                  <span class="companies__stock-description">Акции в обращении</span>
                  <span class="companies__stock-value">170.583.344</span>
                </div>
                <div class="companies__visualisation">
                  <div class="companies__chart" id="chart-9"></div>
                  <div class="companies__rating companies__rating--increase">
                    @include('svg.arrow')
                    <span class="companies__rating-value">314.86</span>
                  </div>
                </div>
              </a>
            </li>
            <li class="companies__item">
              <a class="companies__link" href="#">
                <div class="companies__info">
                  <div class="companies__img">
                    <img src="img/tesla.png" alt="company-logo">
                  </div>
                  <div class="companies__text">
                    <span class="companies__title">Tesla</span>
                    <span class="companies__subtitle">NASDAQ: TSLA</span>
                  </div>
                </div>
                <div class="companies__stock">
                  <span class="companies__stock-description">Капитализация</span>
                  <span class="companies__stock-value companies__stock-value--sort">$18.708.000.000</span>
                  <span class="companies__stock-description">Акции в обращении</span>
                  <span class="companies__stock-value">170.583.344</span>
                </div>
                <div class="companies__visualisation">
                  <div class="companies__chart" id="chart-10"></div>
                  <div class="companies__rating companies__rating--reduce">
                    @include('svg.arrow')
                    <span class="companies__rating-value">314.86</span>
                  </div>
                </div>
              </a>
            </li>
            <li class="companies__item">
              <a class="companies__link" href="#">
                <div class="companies__info">
                  <div class="companies__img">
                    <img src="img/tesla.png" alt="company-logo">
                  </div>
                  <div class="companies__text">
                    <span class="companies__title">Tesla</span>
                    <span class="companies__subtitle">NASDAQ: TSLA</span>
                  </div>
                </div>
                <div class="companies__stock">
                  <span class="companies__stock-description">Капитализация</span>
                  <span class="companies__stock-value companies__stock-value--sort">$47.708.000.000</span>
                  <span class="companies__stock-description">Акции в обращении</span>
                  <span class="companies__stock-value">170.583.344</span>
                </div>
                <div class="companies__visualisation">
                  <div class="companies__chart" id="chart-11"></div>
                  <div class="companies__rating companies__rating--increase">
                    @include('svg.arrow')
                    <span class="companies__rating-value">314.86</span>
                  </div>
                </div>
              </a>
            </li>
            <li class="companies__item">
              <a class="companies__link" href="#">
                <div class="companies__info">
                  <div class="companies__img">
                    <img src="img/tesla.png" alt="company-logo">
                  </div>
                  <div class="companies__text">
                    <span class="companies__title">Tesla</span>
                    <span class="companies__subtitle">NASDAQ: TSLA</span>
                  </div>
                </div>
                <div class="companies__stock">
                  <span class="companies__stock-description">Капитализация</span>
                  <span class="companies__stock-value companies__stock-value--sort">$8.000.000</span><span class="companies__stock-description">Акции в обращении</span>
                  <span class="companies__stock-value">170.583.344</span>
                </div>
                <div class="companies__visualisation">
                  <div class="companies__chart" id="chart-12"></div>
                  <div class="companies__rating companies__rating--increase">
                    @include('svg.arrow')
                    <span class="companies__rating-value">95.15</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <button class="companies__more">Показать еще</button>
        </div>
      </div>
      <div class="sidebar-news">
        <p class="sidebar-news__title">Новости компаний</p>
        <a class="card card--square-full-img" href="#">
          <article class="card__article">
            <div class="card__pic">
              <img src="img/photo-light.jpg">
            </div>
            <div class="card__content">
              <div class="card__text">
                <p>Facebook презентовал своё первое электронное устройство</p>
              </div>
              <div class="card__statistic">
                <span class="views-post">1034</span>
                <span class="comments-post">537</span>
              </div>
            </div>
          </article>
        </a>
        <a class="card card--square-full-img" href="#">
          <article class="card__article">
            <div class="card__pic">
              <img src="img/photo-dark.jpg">
            </div>
            <div class="card__content">
              <div class="card__text">
                <p>Facebook презентовал своё первое электронное устройство</p>
              </div>
              <div class="card__statistic">
                <span class="views-post">1034</span>
                <span class="comments-post">537</span>
              </div>
            </div>
          </article>
        </a>
        <a class="card card--square-full-img" href="#">
          <article class="card__article">
            <div class="card__pic">
              <img src="img/photo-light.jpg">
            </div>
            <div class="card__content">
              <div class="card__text">
                <p>Facebook презентовал своё первое электронное устройство</p>
              </div>
              <div class="card__statistic">
                <span class="views-post">1034</span>
                <span class="comments-post">537</span>
              </div>
            </div>
          </article>
        </a>
      </div>
    </div>
  </div>
@endsection
