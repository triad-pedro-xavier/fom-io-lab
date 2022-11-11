import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/js/bootstrap.bundle'
import { ReactComponent } from "@formio/react/";

const RadioFieldCustomComp = class extends Component {
  constructor(props) {
    super(props);
    this.preview = React.createRef();
    this.obrigatorioLabel = React.createRef();
    this.rastrearLabel = React.createRef();
    this.reaproveitarLabel = React.createRef();
    this.ajudaLabel = React.createRef();

    this.state = {
      value: props.value,
      component: props.component
    };
  }

  setValue = (e) => {
    const inputValue = e.target.value;
    this.setState(
      prevState => ({
        ...prevState,
        value: inputValue
      }), () => this.props.onChange(null, this.state.value)
    );
  };

  componentDidMount() {
    if (this.state.component.obrigatorio) this.obrigatorioLabel.current.classList.remove('d-none');
    else this.obrigatorioLabel.current.classList.add('d-none');

    if (this.state.component.rastrear) this.rastrearLabel.current.classList.remove('d-none');
    else this.rastrearLabel.current.classList.add('d-none');

    if (this.state.component.reaproveitar) this.reaproveitarLabel.current.classList.remove('d-none');
    else this.reaproveitarLabel.current.classList.add('d-none');

    if (this.state.component.mensagemAjuda) this.ajudaLabel.current.classList.remove('d-none');
    else this.ajudaLabel.current.classList.add('d-none');
  }

  render() {
    return (
      <div>
        <div className="d-flex" style={{ height: '30px', gap: '5px' }}>
          <p>{this.state.component.titulo}</p>
          <span ref={this.obrigatorioLabel} style={{ color: 'red' }}>*</span>
          <i ref={this.rastrearLabel} class="bi bi-geo-alt-fill" ></i>
          <i ref={this.reaproveitarLabel} class="bi bi-arrow-clockwise"></i>
          <i ref={this.ajudaLabel} style={{ cursor: 'pointer' }} title={this.state.component.mensagemAjuda} class="bi bi-question-circle-fill"></i>
        </div>
        <div>
          {this.state.component.opcoes &&
            this.state.component.opcoes.map(op => (
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radioPreview" id={`${op.titulo}-id`}
                  onChange={this.setValue} value={op.titulo} ref={this.preview} checked={this.state.component.valorPadrao === op.titulo}/>
                <label class="form-check-label" for={`${op.titulo}-id`}>
                  {op.titulo}
                </label>
              </div>
            ))}
        </div>
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
      weight: 12,
      schema: RadioField.schema()
    };
  }

  static schema() {
    return ReactComponent.schema({
      type: "radioFieldCustomComp",
    });
  }

  static editForm = function () {
    return {
      components: [
        {
          type: "textfield",
          input: true,
          label: "Título",
          weight: 12,
          key: "titulo"
        },
        {
          type: 'datagrid',
          input: true,
          label: 'Opções',
          key: 'opcoes',
          weight: 10,
          reorder: true,
          components: [{
            label: 'Nome',
            key: 'titulo',
            input: true,
            type: 'textfield'
          }]
        },
        {
          type: "select",
          input: true,
          label: "Valor Padrão",
          weight: 12,
          key: "valorPadrao",
          dataSrc: 'custom',
          data: {
            custom: function custom(context) {
              var values = [];
              for (let op of context.data.opcoes) {
                values.push(op.titulo);
              }
              return values;
            }
          },
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
          label: "Obrigatório",
          weight: 12,
          key: "obrigatorio"
        },
        {
          type: "checkbox",
          input: true,
          label: "Rastrear",
          weight: 12,
          key: "rastrear",
        },
        {
          type: "checkbox",
          input: true,
          label: "Reaproveitar Resposta Anterior",
          weight: 12,
          key: "reaproveitar"
        },
      ]
    };
  };

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