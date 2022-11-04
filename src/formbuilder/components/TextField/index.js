import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "@formio/react";

const TextFieldCustomComp = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
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
        <input type='text' className='form-control'/>
      </div>
    );
  }
};

export default class TextField extends ReactComponent {
  static get builderInfo() {
    return {
      title: "Texto",
      icon: "square",
      group: "Data",
      documentation: "",
      weight: -10,
      schema: TextField.schema()
    };
  }

  static schema() {
    return ReactComponent.schema({
      type: "textFieldCustomComp",
      label: "Nome do Campo",
    });
  }
  static editForm = function() {
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
          type: "number",
          input: true,
          label: "Tamanho Mínimo",
          weight: 12,
          key: "min",
        },
        {
          type: "number",
          input: true,
          label: "Tamanho Máximo",
          weight: 12,
          key: "max",
        },
        {
          type: "textfield",
          input: true,
          label: "Valor Padrão",
          weight: 12,
          key: "valorPadrao",
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
          type: "checkbox",
          input: true,
          label: "Reaproveitar Resposta Anterior",
          weight: 12,
          key: "reaproveitar",
        }]
    };
  }

  attachReact(element) {
    return ReactDOM.render(
      <TextFieldCustomComp
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
