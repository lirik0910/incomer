<?php if(!isset($view)) $view = 'index'; ?>
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    @include('base.meta')
    <link rel="stylesheet" href="{{ asset('/design/build/css/' . strtolower($view) . '.css') }}">
</head>

<body>

    <div id="root__container" class="root__container">
        @include('base.header')
        @include('components.auth')
        @yield('content')
        @include('base.footer')
    </div>
    <div class="modal">
        <div class="modal__content">
            <div class="modal__header"></div>
            <div class="modal__body"></div>
            <div class="modal__footer">
                <button class="modal__btn modal__btn--approve">OK</button>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="{{ asset('/design/build/js/common.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/design/build/js/' . strtolower($view) . '.js') }}"></script>
</body>
</html>
