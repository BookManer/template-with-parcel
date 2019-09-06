import React from 'react';

let checkedCategories = new Map();
let themeColors = {
    0: "red",
    1: "blue",
    2: "green"
}

export default class TodoTaskCustomizer extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
        this.handleClickButton = this.handleClickButton.bind(this);

    }

    handleChangeCheckbox(e) {
        let el_check = e.target;
        let key = el_check.dataset.key;
        
        if(!checkedCategories.has(key)) {
            checkedCategories.set(key, {
                label: el_check.name,
                color: themeColors[key]
            });
        } else {
            checkedCategories.delete(key);
        }
    }

    handleClickButton(e) {
        let { onChangeValue, value } = this.props;

        if(value !== "" || value != null) {
            onChangeValue({
                text: value,
                categories: Array.from(checkedCategories.values())
            });
        }
    }

    render() {
        let { value, inputRef } = this.props;

        return (
            <div>
                <div class="ui segment">
                    <div class="ui group">
                        <label class="ui label fluid">
                            A content
                            <div class="ui input">
                                <input id="input-task"
                                       ref={inputRef}
                                       type="text"
                                       onChange={(event) => { value = event.target.value; }} />
                            </div>
                        </label>
                        <button class="ui button green fluid btn-add-task" onClick={ this.handleClickButton }>Add task</button>
                    </div>

                    <div class="ui group">
                        <label class="ui label fluid">
                            Choose category(ies):
                            
                            <div class="ui grouped fields">
                                <div class="ui checkbox field">
                                    <input type="checkbox" onChange={ this.handleChangeCheckbox } data-key="0" name="Жиза" />
                                    <label>Жиза</label>
                                </div>
                                <div class="ui checkbox field">
                                    <input type="checkbox" onChange={ this.handleChangeCheckbox } data-key="1" name="Кодинг" />
                                    <label>Кодинг</label>
                                </div>
                                <div class="ui checkbox field">
                                    <input type="checkbox" onChange={ this.handleChangeCheckbox } data-key="2" name="Кулинария" />
                                    <label>Кулинария</label>
                                </div>
                            </div>
                            
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}