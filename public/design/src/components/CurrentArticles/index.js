import Base from '../../Base.js';

export default class CurrentArticles extends Base {
    initDOMElements(e) {
        this.els = {
            _news: $('.main-news'),
        }
    }

    onDOMReady(e) {
        this.els._news.find('.more').click( (e) => this.getMoreArticles(e));
    }


    ajaxComplete(e){
        this.els._news.find('.more').click( (e) => this.getMoreArticles(e));
    }

    getMoreArticles(e){
        e.preventDefault();

        $('.more').prop('disabled', true);

        $.ajax({
            url: $(e.target).attr('href'),
            method: 'GET',
            dataType: 'html',
        }).done( (data) => {
            if(this.els._news.find('.more')){
                this.els._news.find('.more').remove();
            }
            this.els._news.append(data);
        }).fail( (e) => { });
    }
}
