@foreach($items as $item)
    @include('components.post.comments_item', ['item' => $item])
@endforeach
