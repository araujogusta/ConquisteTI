class TopicCard extends HTMLElement {
    static observedAttributtes = ['title', 'description'];

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        this.render();
        this.style();
    }

    render() {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-4', 'text-white');
        this.shadow.appendChild(card);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body')
        card.appendChild(cardBody);

        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('card-title');
        cardBody.appendChild(cardTitle);
        const title = this.getAttribute('title');
        cardTitle.textContent = title;
        
        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        const description = this.getAttribute('description');
        cardText.textContent = description
        cardBody.appendChild(cardText);

        const hr = document.createElement('hr');
        cardBody.appendChild(hr);

        const list = document.createElement('ul');
        list.classList.add('list-unstyled');
        cardBody.appendChild(list);

        const slot = document.createElement('slot');
        list.appendChild(slot);

        this.childNodes.forEach(node => slot.appendChild(node));
    }

    style() {
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');
        this.shadow.appendChild(link);
    }
}

customElements.define('topic-card', TopicCard);