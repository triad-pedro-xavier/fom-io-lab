import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "@formio/react";

const NumberFieldCustomComp = class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type='number' className='form-control'/>
      </div>
    );
  }
};

export default class NumberField extends ReactComponent {
  static get builderInfo() {
    return {
      title: "Numérico",
      icon: "square",
      group: "Data",
      documentation: "",
      weight: -10,
      schema: NumberField.schema()
    };
  }

  static schema() {
    return ReactComponent.schema({
      type: "numberFieldCustomComp",
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
          type: "checkbox",
          input: true,
          label: "Aceitar Somente Positivos",
          weight: 12,
          key: "onlyPositive",
        },
        {
          type: "number",
          input: true,
          label: "Escala",
          weight: 12,
          key: "escala",
        },
        {
          type: "number",
          input: true,
          label: "Precisão",
          weight: 12,
          key: "precisao",
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
          type: "number",
          input: true,
          label: "Passo",
          weight: 12,
          key: "passo",
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
      <NumberFieldCustomComp
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
