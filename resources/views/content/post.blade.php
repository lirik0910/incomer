@extends('layouts.app')

@section('content')
  <main class="main">
    <div class="container">
      <div class="wrap">
        <article class="post">
          <h1 class="post__title">{{ $item->title }}</h1>
          <div class="post__info">
            <time class="post__date">{{ $item->publish_date? $dateFormatter::format($item->publish_date): '' }}</time>
            <span class="views-post views-post--light">{{ $item->views }}</span>
            <span class="comments-post comments-post--light">{{ $item->comments_count }}</span>
          </div>
          <div class="post__pic">
              @php
                  $img = $item->images->where('pivot.type', 'preview')->first();

                      if($img !== NULL && File::exists(public_path($img->url))){
                          $img = asset($img->url);
                      } else{
                          $img = asset('img/photo-dark.jpg');
                      }
              @endphp
            <img src="{{ $img }}">
          </div>
          <div class="post__text">
              {!! $item->description !!}
          </div>
          <button class="post__comment-btn">Читать комментарии</button>
        </article>
        <div class="sidebar-news">
          <p class="sidebar-news__title">Похожие новости</p>
            @foreach($tagRel as $relItem)
                @include('components.index.hot_news_item', ['type' => 'short', 'item' => $relItem])
            @endforeach
        </div>
      </div>
    </div>
    <div class="related">
      <div class="container">
        <p class="related__title">Новости из похожей категории</p>
            @foreach($catRel as $relItem)
              @include('components.index.hot_news_item', ['type' => 'short', 'item' => $relItem])
            @endforeach
      </div>
    </div>
  </main>
@endsection
