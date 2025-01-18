class TopicItem extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' })
        this.render();
        this.style();
    }
    
    render() {
        const listItem = document.createElement('li');
        listItem.classList.add('mb-2', 'd-flex', 'align-items-center');
        this.shadow.appendChild(listItem);
        
        const indicator = document.createElement('span');
        const backgroundColor = this.getAttribute('bs-color');
        indicator.classList.add('indicator', backgroundColor);
        listItem.appendChild(indicator);
        
        const link = document.createElement('a');
        const href = this.getAttribute('href');
        link.href = href;
        link.target = '_blank';
        listItem.appendChild(link);
        
        this.childNodes.forEach(node => link.appendChild(node));
    }

    style() {
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');
        this.shadow.appendChild(link);

        const style = document.createElement('style');
        style.textContent = `
            .indicator {
                height: .75rem;
                width: .75rem;
                border-radius: 50%;
                margin-right: .5rem !important;
            }
        `;
        this.shadow.appendChild(style);
    }
}

customElements.define('topic-item', TopicItem);