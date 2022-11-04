import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "@formio/react";
import Signature from "formiojs/components/signature/Signature";


const AssinaturaCustomComp = class extends Component {
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
};

export default class AssinaturaField extends Signature {
  static get builderInfo() {
    return {
      title: "Assinatura",
      icon: "pencil",
      group: "Campos",
      documentation: "",
      weight: -10,
      schema: AssinaturaField.schema()
    };
  }

  static schema() {
    return ReactComponent.schema({
      type: "assinaturaFieldCustomComp",
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
          type: "textfield",
          input: true,
          label: "Mensagem de Ajuda",
          weight: 12,
          key: "mensagemAjuda",
        },
        {
          type: "textfield",
          input: true,
          label: "Classe",
          weight: 12,
          key: "classe",
        },
        // {
        //   type: "color",
        //   input: true,
        //   label: "Cor da caneta",
        //   weight: 12,
        //   key: "color"
        // },
        {
          type: "checkbox",
          input: true,
          label: "Rastreabilizar",
          weight: 12,
          key: "rastrear",
        },]
    };
  }

  // Não está funcionando
  // get inputInfo() {
  //   const info = super.inputInfo;
  //   info.attr.type = 'color';
  //   return info;
  // }


  attachReact(element) {
    this.addEventListener(this.refs.customRef, 'click', () => {
      console.log('Custom Ref has been clicked!!!');        
  });
    return ReactDOM.render(
      <AssinaturaCustomComp
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
