@extends('layouts.app')

@section('content')
  <div class="container">
    <div class="wrap">
      <article class="post">
        <h1 class="post__title">{{ $item->title }}</h1>
        <div class="post__info">
          <time class="post__date">{{ $dateFormatter::format($item->publish_date) }}</time>
          <span class="views-post views-post--light">{{ $item->views }}</span>
          <span class="comments-post comments-post--light">{{ $item->comments_count }}</span>
        </div>
        <div class="post__pic">
            @php
                $img = $item->images->where('pivot.type', 'preview')->first();
            @endphp
          <img src="{{ $img->url }}">
        </div>
        <!--<h2 class="post__subtitle">Причины кризиса</h2>-->
        <div class="post__text">
            {{ $item->description }}
        </div>
        <button class="post__comment-btn">Читать комментарии</button>
      </article>
      <div class="sidebar-news">
        <p class="sidebar-news__title">Похожие новости</p>
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
                <span class="views">1034</span>
                <span class="comments">537</span>
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
                <span class="views">1034</span>
                <span class="comments">537</span>
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
                <span class="views">1034</span>
                <span class="comments">537</span>
              </div>
            </div>
          </article>
        </a>
      </div>
    </div>
  </div>
  <div class="related">
    <div class="container">
      <p class="related__title">Новости, похожие на эту</p>
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
              <span class="views">1034</span>
              <span class="comments">537</span>
            </div>
          </div>
        </article>
      </a>
      <a class="card card--square-full-img" href="#">
        <article class="card__article">
          <div class="card__pic"><img src="img/photo-dark.jpg"></div>
          <div class="card__content">
            <div class="card__text">
              <p>Facebook презентовал своё первое электронное устройство</p>
            </div>
            <div class="card__statistic">
              <span class="views">1034</span>
              <span class="comments">537</span>
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
              <span class="views">1034</span>
              <span class="comments">537</span>
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
              <span class="views">1034</span>
              <span class="comments">537</span>
            </div>
          </div>
        </article>
      </a>
    </div>
  </div>
@endsection
