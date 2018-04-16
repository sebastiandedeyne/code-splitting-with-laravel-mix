@extends('layouts.app')

@section('content')
<div id="component">
    <my-big-fat-component></my-big-fat-component>
</div>

<div class="links">
    <a href="{{ url('/') }}">Home</a>
</div>
@endsection
