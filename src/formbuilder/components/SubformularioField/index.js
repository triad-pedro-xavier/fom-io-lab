import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "@formio/react";

const SubformularioFieldCustomComp = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formulario: props.component.formulario
    };
    console.log(props.component)
  }

  render() {
    return (
      <div>
        <input disabled value={this.state.formulario} className='form-control'/>
      </div>
    );
  }
};

export default class SubformularioField extends ReactComponent {
  static get builderInfo() {
    return {
      title: "Sub Formulário",
      icon: "square",
      group: "Data",
      documentation: "",
      weight: -10,
      schema: SubformularioField.schema()
    };
  }

  static schema() {
    return ReactComponent.schema({
      type: "subformularioFieldCustomComp",
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
          type: 'select',
          input: true,
          weight: 12,
          key: 'formulario',
          label: 'Formulário',
          // dataSrc: 'values',
          data: {
            values: [{
              label: 'Formulário GLP',
              value: 'Formulário GLP'
            }, {
              label: 'Formulário Automotivo',
              value: 'Formulário Automotivo'
            }]
          }
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
      <SubformularioFieldCustomComp
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
