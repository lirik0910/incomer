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
{{--            @isset($companies)
                {{ $companies->links() }}
            @endisset--}}
        </div>
      </div>
      <div class="sidebar-news">
        <p class="sidebar-news__title">Новости компаний</p>
          @foreach($news as $item)
              @include('components.index.hot_news_item', ['item' => $item, 'type' => 'short'])
          @endforeach
      </div>
    </div>
  </div>
@endsection
