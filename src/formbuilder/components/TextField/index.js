import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/js/bootstrap.bundle'
import { ReactComponent } from "@formio/react/";

const TextFieldCustomComp = class extends Component {
  constructor(props) {
    super(props);
    this.preview = React.createRef();
    this.minError = React.createRef();
    this.maxError = React.createRef();
    this.obrigatorioLabel = React.createRef();
    this.rastrearLabel = React.createRef();
    this.reaproveitarLabel = React.createRef();

    this.state = {
      value: props.value || props.component.valorPadrao,
      component: props.component
    };
  }

  setValue = (e) => {
    const inputValue = e.target.value;
    this.validatePreview(inputValue);
    this.setState(
      prevState => ({
        ...prevState,
        value: inputValue
      }), () => this.props.onChange(null, this.state.value)
    );
  };

  componentDidMount() {
    this.validatePreview(this.state.value || '');
    if (this.state.component.obrigatorio) this.obrigatorioLabel.current.classList.remove('d-none');
    else this.obrigatorioLabel.current.classList.add('d-none');

    if (this.state.component.rastrear) this.rastrearLabel.current.classList.remove('d-none');
    else this.rastrearLabel.current.classList.add('d-none');

    if (this.state.component.reaproveitar) this.reaproveitarLabel.current.classList.remove('d-none');
    else this.reaproveitarLabel.current.classList.add('d-none');

  }

  validatePreview(inputValue) {
    const min = this.state.component.min || 0;
    const max = this.state.component.max || Number.MAX_SAFE_INTEGER;
    const isMax = inputValue.length > max;
    const isMin = inputValue.length < min;
    const prevEl = this.preview.current;
    const minErrorEl = this.minError.current;
    const maxErrorEl = this.maxError.current;

    prevEl.classList.remove('is-invalid');
    minErrorEl.classList.add('d-none');
    maxErrorEl.classList.add('d-none');
    if (isMin) {
      minErrorEl.classList.remove('d-none');
      prevEl.classList.add('is-invalid');
    }

    if (isMax) {
      maxErrorEl.classList.remove('d-none');
      prevEl.classList.add('is-invalid');
    }
  }

  render() {
    return (
      <div>
        <div className="d-flex" style={{ height: '30px', gap: '5px' }}>
          <p>{this.state.component.titulo}</p>
          <span ref={this.obrigatorioLabel} style={{ color: 'red' }}>*</span>
          <i ref={this.rastrearLabel} class="bi bi-geo-alt-fill" ></i>
          <i ref={this.reaproveitarLabel} class="bi bi-arrow-clockwise"></i>
        </div>
        <div>
          <input type="text" id="prev" className="form-control" placeholder={this.state.component.nome}
            value={this.state.value} onChange={this.setValue} ref={this.preview} />
        </div>
        <div>
          <small id="min-error" className="text-danger d-none" ref={this.minError}>
            Mensagem deve conter no mínimo {this.state.component.min} caracteres.
          </small>
          <small id="max-error" className="text-danger d-none" ref={this.maxError}>
            Mensagem deve conter no máximo {this.state.component.max} caracteres.
          </small>
        </div>
      </div>
    );
  }
};

export default class TextField extends ReactComponent {
  static get builderInfo() {
    return {
      title: "Texto",
      icon: "square",
      group: "inputs",
      documentation: "",
      weight: -10,
      schema: TextField.schema()
    };
  }

  static schema() {
    return ReactComponent.schema({
      type: "textFieldCustomComp",
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
          type: "textfield",
          input: true,
          label: "Placeholder",
          weight: 12,
          key: "nome"
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
          label: "Mensagem de Ajuda",
          weight: 12,
          key: "mensagemAjuda",
        },
        {
          type: "checkbox",
          input: true,
          label: "Obrigatório",
          weight: 12,
          key: "obrigatorio",
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
          key: "reaproveitar",
        },
      ]
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
