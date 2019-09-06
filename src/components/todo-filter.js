import React from 'react';

export default (props) => {
    let { items, onFiltered } = props;
    
    const filterCategories = (e) => {
        items = items.filter((item) => { 
            let hasCategories = item.categories.filter((category) => ( e.target.checked && e.target.name === category.label ))

            return hasCategories.length; 
         });

        onFiltered(items);
    }

    return (
        <div class="ui segment">
            <div class="inline">
                <label>Filter list by:</label>
                <div>
                    <div class="ui checkbox">
                        <input type="checkbox" onChange = { filterCategories } name="Жиза" />
                        <label>Жиза</label>
                    </div>
                </div>
                <div>
                    <div class="ui checkbox">
                        <input type="checkbox" onChange = { filterCategories } name="Кодинг" />
                        <label>Кодинг</label>
                    </div>
                </div>
                <div>
                    <div class="ui checkbox">
                        <input type="checkbox" onChange = { filterCategories } name="Кулинария" />
                        <label>Кулинария</label>
                    </div>
                </div>
            </div>
        </div>
    )
}