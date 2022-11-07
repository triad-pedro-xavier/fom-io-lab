import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "@formio/react";

const InputFileFieldCustomComp = class extends Component {
 constructor(props) {
  super(props);
 }

 render() {
  return (
   <div>
    <input type='date' className='form-control' />
   </div>
  );
 }
};

export default class InputFileField extends ReactComponent {
 static get builderInfo() {
  return {
   title: "Arquivo",
   icon: "square",
   group: "Data",
   documentation: "",
   weight: -10,
   schema: InputFileField.schema()
  };
 }

 static schema() {
  return ReactComponent.schema({
   type: "inputFileFieldCustomComp",
   label: "Nome do Campo",
  });
 }
 static editForm = function () {
  return {
   components: [
    {
     type: "checkbox",
     input: true,
     label: "Multiplos Arquivos",
     weight: 12,
     key: "multiplos",
     required: true
    },
    {
     type: "checkbox",
     input: true,
     label: "Obrigatório",
     weight: 12,
     key: "required",
    },
    {
     type: "checkbox",
     input: true,
     label: "Reaproveitar Resposta Anterior",
     weight: 12,
     key: "reaproveitar",
    },
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
     type: "number",
     input: true,
     label: "Tamanho Mínimo",
     weight: 12,
     placeholder: 'MB',
     required: true,
     key: "min",
    },
    {
     type: "number",
     input: true,
     label: "Tamanho Máximo",
     placeholder: 'MB',
     weight: 12,
     key: "max",
     validate: {
      required: true
    }
    },
    {
     type: 'datagrid',
     input: true,
     label: 'Tipos de Arquivo',
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
     key: "tooltip",
    },
    {
     type: "number",
     input: true,
     label: "Passo",
     weight: 12,
     key: "passo",
    },
    ]
  };
 }

 attachReact(element) {
  return ReactDOM.render(
   <InputFileFieldCustomComp
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
