@extends('layouts.app')
@section('content')
  <div class="container">
      <div class="summary">
        <div class="tag">
          <!--<ul class="tag__list">
            <li class="tag__item"><a class="tag__link" href="#">Bitcoin</a></li>
            <li class="tag__item"><a class="tag__link" href="#">Ethereum</a></li>
            <li class="tag__item"><a class="tag__link" href="#">MYRIG</a></li>
            <li class="tag__item"><a class="tag__link" href="#">ASIC</a></li>
            <li class="tag__item"><a class="tag__link" href="#">GPU майнинг</a></li>
            <li class="tag__item"><a class="tag__link" href="#">AMD</a></li>
          </ul>-->
        </div>
        <!--<div class="sort">
          <ul class="sort__list">
            <li class="sort__item">
              <a class="sort__link" href="#">
                @include('svg.view-list')
              </a>
            </li>
            <li class="sort__item">
              <a class="sort__link sort__link--active" href="#">
                @include('svg.view-thumbs')
              </a>
            </li>
          </ul>
        </div>-->
      </div>
      <section class="main-news">
          @foreach($currentNews as $currentItem)
              @if($loop->first)
                  <div class="row">
                      @include('components.news.patterns.' . explode('.', $topNews->first()->preview_pattern)[1], ['item' => $topNews->first()])
                      @include('components.index.hot_news_item', ['item' => $currentItem, 'type' => 'short'])
              @elseif($loop->iteration === 2)
                      @include('components.index.hot_news_item', ['item' => $currentItem, 'type' => 'short'])
                  </div>
              @elseif($loop->iteration === 3)
                  <div class="row">
                      @include('components.index.hot_news_item', ['item' => $currentItem, 'type' => 'short'])
              @elseif($loop->iteration === 4)
                      @include('components.index.hot_news_item', ['item' => $currentItem, 'type' => 'short'])
                      @include('components.news.patterns.' . explode('.', $topNews->last()->preview_pattern)[1], ['item' => $topNews->last()])
                  </div>
              @elseif($loop->iteration === 5)
                  <div class="row">
                      @include('components.index.hot_news_item', ['item' => $currentItem, 'type' => 'short'])
              @elseif($loop->iteration === 8)
                      @include('components.index.hot_news_item', ['item' => $currentItem, 'type' => 'short'])
                  </div>
              @else
                  @include('components.index.hot_news_item', ['item' => $currentItem, 'type' => 'short'])
              @endif
            @endforeach
            @isset($currentNews)
                {{ $currentNews->links() }}
            @endisset
      </section>
    </div>
@endsection
