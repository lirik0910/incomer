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
    <script type="text/javascript" src="{{ asset('/design/build/js/common.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/design/build/js/' . strtolower($view) . '.js') }}"></script>
</body>
</html>
