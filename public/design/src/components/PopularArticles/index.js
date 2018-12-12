import Base from '../../Base.js';
import StickySidebar from 'sticky-sidebar/dist/sticky-sidebar.js';

export default class PopularArticles extends Base {
    initDOMElements(e) {
        this.els = {
            _news: $('.news')
        }
    }

    onDOMReady(e) {
        var sidebar = this.initStickySidebar();
        this.els._news.find('.more').click((e) => this.getMoreArticles(e, sidebar));
    }

    ajaxComplete(e) {
        this.els._news.find('.more').click( (e) => this.getMoreArticles(e));
    }

    getMoreArticles(e, sidebar = null) {
        e.preventDefault();

        $.ajax({
            url: $(e.target).attr('href'),
            method: 'GET',
            dataType: 'html',
        }).done( (data) => {
            if(this.els._news.find('.more')){
                this.els._news.find('.more').remove();
            }
            this.els._news.append(data);
            
            // recalculate sidebar position
            if (sidebar != null) {
                sidebar.updateSticky();
            }
        }).fail( (e) => { });
    }

    initStickySidebar() {
        var sidebar = new StickySidebar('.sidebar-wrap', {
            containerSelector: '.wrap',
            innerWrapperSelector: '.sidebar',
            topSpacing: 24,
            bottomSpacing: 24
        });
        return sidebar;
    }
}
