import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "@formio/react";
const NumberFieldCustomComp = class extends Component {
  constructor(props) {
    super(props);
    this.preview = React.createRef();
    this.positiveLabel = React.createRef();
    this.positiveError = React.createRef();
    this.minError = React.createRef();
    this.maxError = React.createRef();
    this.precisaoError = React.createRef();
    this.precisaoInvalidaError = React.createRef();
    this.escalaError = React.createRef();
    this.obrigatorioLabel = React.createRef();
    this.rastrearLabel = React.createRef();
    this.reaproveitarLabel = React.createRef()
    this.ajudaLabel = React.createRef();
    this.state = {
      value: props.value || props.component.valorPadrao,
      component: props.component
    };
  }

  setValue = (e) => {
    const inputValue = e.target.value;
    this.validadePreview(inputValue);
    this.setState(
      prevState => ({
        ...prevState,
        value: inputValue
      }), () => this.props.onChange(null, this.state.value)
    );
  };

  componentDidMount() {
    let value = this.state.value || 0;
    if ((this.state.component.escala && !value) || (this.state.component.precisao && !value)) {
      let precisao = this.state.component.precisao || 1;
      let escala = this.state.component.escala || 1;

      value = "1" + "0".repeat(escala - 1);
      value += "." + "0".repeat(precisao);
      this.setState(
        prevState => ({
          ...prevState,
          value: value
        }), () => this.props.onChange(null, this.state.value)
      );
    }
    this.validadePreview(value);

    if (this.state.component.obrigatorio) this.obrigatorioLabel.current.classList.remove('d-none')
    else this.obrigatorioLabel.current.classList.add('d-none')
    if (this.state.component.rastrear) this.rastrearLabel.current.classList.remove('d-none')
    else this.rastrearLabel.current.classList.add('d-none')
    if (this.state.component.reaproveitar) this.reaproveitarLabel.current.classList.remove('d-none')
    else this.reaproveitarLabel.current.classList.add('d-none')
    if (this.state.component.mensagemAjuda) this.ajudaLabel.current.classList.remove('d-none')
    else this.ajudaLabel.current.classList.add('d-none')
    if (this.state.component.onlyPositive) this.positiveLabel.current.classList.remove('d-none')
    else this.positiveLabel.current.classList.add('d-none')
  }

  validadePreview(inputValue) {
    const min = this.state.component.min || Number.MIN_SAFE_INTEGER;
    const max = this.state.component.max || Number.MAX_SAFE_INTEGER;
    const isPositive = this.state.component.onlyPositive;
    const precisao = this.state.component.precisao;
    const escala = this.state.component.escala;
    const isMax = inputValue.length > max;
    const isMin = inputValue.length < min;
    const prevEl = this.preview.current;
    const minErrorEl = this.minError.current;
    const maxErrorEl = this.maxError.current;
    const precisaoErrorEl = this.precisaoError.current;
    const precisaoInvalidaErrorEl = this.precisaoInvalidaError.current;
    const escalaErrorEl = this.escalaError.current;
    const isNotPositiveErrorEl = this.positiveError.current;

    prevEl.classList.remove('is-invalid');
    minErrorEl.classList.add('d-none');
    maxErrorEl.classList.add('d-none');
    precisaoErrorEl.classList.add('d-none');
    precisaoInvalidaErrorEl.classList.add('d-none');
    escalaErrorEl.classList.add('d-none');
    isNotPositiveErrorEl.classList.add('d-none');

    if (isMin) {
      minErrorEl.classList.remove('d-none');
      prevEl.classList.add('is-invalid');
    }
    if (isMax) {
      maxErrorEl.classList.remove('d-none');
      prevEl.classList.add('is-invalid');
    }
    if (isPositive && inputValue < 0) {
      isNotPositiveErrorEl.classList.remove('d-none')
      prevEl.classList.add('is-invalid')
    }

    const numberSplit = (inputValue + '').split('.');
    const isEscala = inputValue ? (inputValue + '').split('.')[0].length > escala : false;
    if (precisao) {
      if (numberSplit.length === 2) {
        const isPrecisao = (inputValue + '').split('.')[1].length > precisao;
        if (isPrecisao) {
          precisaoErrorEl.classList.remove('d-none');
          prevEl.classList.add('is-invalid');
        }
      } else {
        precisaoInvalidaErrorEl.classList.remove('d-none');
        prevEl.classList.add('is-invalid');
      }
    }
    if (escala && isEscala) {
      escalaErrorEl.classList.remove('d-none');
      prevEl.classList.add('is-invalid');
    }
  }

  render() {
    let step = 1;
    if (!this.state.component.passo) {
      if (this.state.component.precisao) {
        step = '0.'+'0'.repeat(this.state.component.precisao-1)+'1';
      }
    }
    console.log(step)

    return (
      <div>
        <div className="d-flex" style={{ height: '30px', gap: '5px' }}>
          <p>{this.state.component.titulo}</p>
          <span ref={this.obrigatorioLabel} style={{ color: 'red', cursor: 'pointer' }} title='Campo Obrigatório'>*</span>
          <i ref={this.rastrearLabel} style={{ cursor: 'pointer' }} title='Rastreado' className="bi bi-geo-alt-fill"></i>
          <i ref={this.reaproveitarLabel} style={{ cursor: 'pointer' }} title='Resposta Reaproveitada' className="bi bi-arrow-clockwise"></i>
          <i ref={this.positiveLabel} style={{ cursor: 'pointer' }} title='Apenas numeros positivos' className='bi bi-plus-circle'></i>
          <i ref={this.ajudaLabel} style={{ cursor: 'pointer' }} title={this.state.component.mensagemAjuda} className='bi bi-question-circle-fill'></i>
        </div>
        <div>
          <input type="number" className="form-control" placeholder={this.state.component.nome}
            value={this.state.value}
            step={step} onChange={this.setValue} ref={this.preview} />
        </div>
        <div>
          <small id="min-error" className="text-danger d-none" ref={this.minError}>
            Mensagem deve conter no minimo {this.state.component.min} caracteres.<br/>
          </small>
          <small id="max-error" className="text-danger d-none" ref={this.maxError}>
            Mensagem deve conter no maximo {this.state.component.max} caracteres.<br/>
          </small>
          <small id="positive-error" className="text-danger d-none" ref={this.positiveError}>
            Apenas numeros positivos sao aceitos<br/>
          </small>
          <small id="previsao-error" className="text-danger d-none" ref={this.precisaoError}>
            Precisão maior que {this.state.component.precisao}<br/>
          </small>
          <small id="previsao-invalida-error" className="text-danger d-none" ref={this.precisaoInvalidaError}>
            Precisão inválida<br/>
          </small>
          <small id="escala-error" className="text-danger d-none" ref={this.escalaError}>
            Escala maior que {this.state.component.escala}
          </small>
        </div>
      </div>
    );
  }
};
export default class NumberField extends ReactComponent {
  static get builderInfo() {
    return {
      title: "Numérico",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
      icon: "bi bi-hash",
      group: "inputs",
      documentation: "",
      weight: -10,
      schema: NumberField.schema()
    };
  }
  static schema() {
    return ReactComponent.schema({
      type: "numberFieldCustomComp",
    });
  }
  static editForm = function () {
    return {
      components: [
        {
          type: "textfield",
          input: true,
          label: "Titulo",
          weight: 12,
          key: "titulo"
        },
        {
          type: "textfield",
          input: true,
          label: "Dica",
          weight: 12,
          key: "nome"
        },
        {
          type: "number",
          input: true,
          label: "Tamanho Mínimo",
          weight: 12,
          min: 0,
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
          type: "number",
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
          type: "number",
          input: true,
          label: "Passo",
          weight: 12,
          key: "passo",
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
          label: "Aceitar Somente Positivos",
          weight: 12,
          key: "onlyPositive",
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