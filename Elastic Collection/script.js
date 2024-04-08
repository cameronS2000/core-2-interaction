const renderItems = (collection) => {
    const collectionMap = {}; 
    const collectionList = document.getElementById('collection');
    
    collection.forEach(item => {
        if (!collectionMap[item.Category]) {
            collectionMap[item.Category] = [];
        }
        collectionMap[item.Category].push(item);
    });
    
    for (const category in collectionMap) {
        const categoryList = document.createElement('ul');
        categoryList.className = 'category-list';
        
        collectionMap[category].forEach(item => {
            const itemDetails = `
                <li id="${item.id}" class="list-item">
                    <img src="${item.FileName}" class="list-item-image">
                    <div class="list-item-content">
                        <p><strong>Category:</strong> <span>${item.Category}</span></p>
                        <p><strong>Brand:</strong> ${item.Brand}</p>
                        <p><strong>Rating:</strong> ${item.Rating}</p>
                        <p><strong>Material:</strong> ${item.Material}</p>
                        <p><strong>Color:</strong> ${item.Color}</p>
                    </div>
                </li>
            `;
            categoryList.insertAdjacentHTML('beforeend', itemDetails);
        });
        
        const categoryHeader = document.createElement('h2');
        categoryHeader.textContent = category;
        
        collectionList.appendChild(categoryHeader);
        collectionList.appendChild(categoryList);
        
        collectionList.insertAdjacentHTML('beforeend', '<br>');
    }
};

fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
        renderItems(collection);
    })
    .catch(error => {
        console.error('Error fetching collection data:', error);
    });
