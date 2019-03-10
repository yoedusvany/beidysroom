<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    @include('template.1-head')

<body>


@include('template.2-topbar')

@include('template.3-header')

@include('template.4-intro')


@include('template.5-main')


@yield('content')


@include('template.6-footer')

@include('template.7-scripts')

</body>
</html>
