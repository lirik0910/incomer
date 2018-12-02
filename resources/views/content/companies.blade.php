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
            <!--<li class="companies__sort-item">
              <a class="companies__sort-link" href="#" data-sort-value="rating" data-sort-type="original-order"> 
                <span>Рейтинг</span>
                @include('svg.arrow')
              </a>
            </li>-->
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
                @include('components.companies.companies_list', ['items' => $companies])
            </ul>
        </div>
      </div>
      <div class="sidebar-news">
        <p class="sidebar-news__title">Новости компаний</p>
          @foreach($news as $item)
              @include('components.index.hot_news_item', ['item' => $item, 'type' => 'short'])
          @endforeach
        <!--<a class="card card--square-full-img" href="#">
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
        </a>-->
      </div>
    </div>
  </div>
@endsection
