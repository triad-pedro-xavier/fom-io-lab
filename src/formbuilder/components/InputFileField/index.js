import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "@formio/react";

const InputFileFieldCustomComp = class extends Component {
  constructor(props) {
    super(props);
    this.preview = React.createRef();
    this.obrigatorioLabel = React.createRef();
    this.rastrearLabel = React.createRef();
    this.reaproveitarLabel = React.createRef();
    this.ajudaLabel = React.createRef();
    this.multiplosLabel = React.createRef();

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

    if (this.state.component.multiplos) this.multiplosLabel.current.classList.remove('d-none');
    else this.multiplosLabel.current.classList.add('d-none');

  }

  render() {
    return (
      <div>
        <div className="d-flex" style={{ height: '30px', gap: '5px' }}>
          <p>{this.state.component.titulo}</p>
          <span ref={this.obrigatorioLabel} style={{ color: 'red' }}>*</span>
          <i ref={this.rastrearLabel} class="bi bi-geo-alt-fill" ></i>
          <i ref={this.reaproveitarLabel} class="bi bi-arrow-clockwise"></i>
          <i ref={this.multiplosLabel} style={{ cursor: 'pointer' }} title='M??tiplos arquivos habilitado'  class="bi bi-files"></i>
          <i ref={this.ajudaLabel} style={{ cursor: 'pointer' }} title={this.state.component.mensagemAjuda} class="bi bi-question-circle-fill"></i>
        </div>
        <div>
          <input type='file' className="form-control" multiple={this.state.component.multiplos}/>
        </div>
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
          type: 'textfield',
          input: true,
          label: 'Extens??o(??es) do(s) Arquivo(s)',
          placeholder: 'Ex: jpg,xmls,png',
          description: 'Extens??es separadas por v??rgula',
          key: 'extensao',
          weight: 10,
        },
        {
          type: "number",
          input: true,
          label: "Tamanho M??nimo",
          weight: 12,
          placeholder: 'MB',
          required: true,
          key: "min",
        },
        {
          type: "number",
          input: true,
          label: "Tamanho M??ximo",
          placeholder: 'MB',
          weight: 12,
          key: "max"
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
          label: "Obrigat??rio",
          weight: 12,
          key: "obrigatorio",
        },
        {
          type: "checkbox",
          input: true,
          label: "Mais de um Arquivo",
          weight: 12,
          key: "multiplos",
          required: true
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
