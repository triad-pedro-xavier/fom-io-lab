import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "@formio/react";

const RadioFieldCustomComp = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.component.data
    };
  }

  setValue = () => {
    this.setState(
      prevState => ({ value: !prevState.value }),
      () => this.props.onChange(null, this.state.value)
    );
  };

  render() {
    return (
      <div>
        {this.state.data && this.state.data.map(el => {
          return <>
            <div role="group" class="form-radio radio">
              <div class="checkbox  form-check">
                <label class="form-check-label label-position-right">
                  <input role="radio" name='radio-field' value="" class="form-check-input" type="radio"/>
                    <span>{el.label}</span>
                </label>
              </div>
            </div>
          </>
        })}
      </div>
    );
  }
};

export default class RadioField extends ReactComponent {
  static get builderInfo() {
    return {
      title: "Grupo de Opções",
      icon: "square",
      group: "Data",
      documentation: "",
      weight: -10,
      schema: RadioField.schema()
    };
  }

  static schema() {
    return ReactComponent.schema({
      type: "radioFieldCustomComp",
      label: "Nome do Campo",
    });
  }
  static editForm = function () {
    return {
      components: [
        {
          type: "textfield",
          input: true,
          label: "Label",
          weight: 12,
          key: "label"
        },
        {
          type: "textfield",
          input: true,
          label: "Nome",
          weight: 12,
          key: "nome"
        },
        {
          type: "textfield",
          input: true,
          label: "Identificador",
          weight: 12,
          key: "identificador",
        },
        {
          type: "checkbox",
          input: true,
          label: "Obrigatório",
          weight: 12,
          key: "obrigatorio",
        },
        {
          type: "textfield",
          input: true,
          label: "Classe",
          weight: 12,
          key: "classe",
        },
        {
          type: "textfield",
          input: true,
          label: "Mensagem de Ajuda",
          weight: 12,
          key: "mensagemAjuda",
        },
        {
          type: 'datagrid',
          input: true,
          label: 'Opções',
          key: 'data',
          weight: 10,
          reorder: true,
          components: [{
            label: 'Label',
            key: 'label',
            input: true,
            type: 'textfield'
          }, {
            label: 'Valor',
            key: 'value',
            input: true,
            type: 'textfield',
          }]
        },
        {
          type: "checkbox",
          input: true,
          label: "Reaproveitar Resposta Anterior",
          weight: 12,
          key: "reaproveitar",
        },]
    };
  }

  attachReact(element) {
    return ReactDOM.render(
      <RadioFieldCustomComp
        component={this.component}
        value={this.dataValue}
        onChange={this.updateValue}
      />,
      element
    );
  }

  detachReact(element) {
    if (element) {
      ReactDOM.unmountComponentAtNode(element);
    }
  }
}
