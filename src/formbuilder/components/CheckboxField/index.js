import React, { Component } from "react";
import { ReactComponent} from "@formio/react";
import ReactDOM from 'react-dom';
const CheckGroupCustomComp = class extends Component {
  constructor(props) {
    super(props);
    this.preview = React.createRef();
    this.obrigatorioLabel = React.createRef();
    this.rastrearLabel = React.createRef();
    this.reaproveitarLabel = React.createRef();
    this.ajudaLabel = React.createRef();
    this.boxChecked = React.createRef();
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
  componentDidMount(){
   console.log(this.state.component.opcoes)
    if(this.state.component.obrigatorio) this.obrigatorioLabel.current.classList.remove('d-none')
    else this.obrigatorioLabel.current.classList.add('d-none')
    if(this.state.component.rastrear) this.rastrearLabel.current.classList.remove('d-none')
    else this.rastrearLabel.current.classList.add('d-none')
    if(this.state.component.reaproveitar) this.reaproveitarLabel.current.classList.remove('d-none')
    else this.reaproveitarLabel.current.classList.add('d-none')
    if(this.state.component.mensagemAjuda) this.ajudaLabel.current.classList.remove('d-none')
    else this.ajudaLabel.current.classList.add('d-none')
  }
  render() {
    return (
      <div>
        <div className="d-flex" style={{height: '30px', gap: '5px'}}>
          <p>{this.state.component.titulo}</p>
          <span ref={this.obrigatorioLabel} style={{ color: 'red', cursor: 'pointer'}} title='Campo Obrigatório'>*</span>
          <i ref={this.rastrearLabel} style={{cursor: 'pointer'}} title='Rastreado' className="bi bi-geo-alt-fill"></i>
          <i ref={this.reaproveitarLabel} style={{cursor: 'pointer'}} title='Resposta Reaproveitada' className="bi bi-arrow-clockwise"></i>
          <i ref={this.ajudaLabel} style={{cursor: 'pointer'}} title={this.state.component.mensagemAjuda} className='bi bi-question-circle-fill'></i>
          </div>
          <div>
            {this.state.component.opcoes && this.state.component.opcoes.map(op => (
            <div class="form-check">
                <input class="form-check-input" type="checkbox" name="checkboxPreview" id={`${op.titulo}`}
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
export default class CheckBoxGroup extends ReactComponent {
  static get builderInfo() {
    return {
      title: "Grupo de Seleção",
      icon: "group",
      group: "inputs",
      documentation: "",
      weight: 12,
      schema: CheckBoxGroup.schema()
    };
  }
  static schema() {
    return ReactComponent.schema({
      type: "checkBoxGroupCustomComp",
    });
  }
  static editForm = function () {
    const r = {
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
          label: "Mensagem de Ajuda",
          weight: 12,
          key: "mensagemAjuda",
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
            type: "checkbox",
            input: true,
            label: "Obrigatorio",
            weight: 12,
            key: "obrigatorio"
        },
        {
            type: "checkbox",
            input: true,
            label: "Reaproveitar resposta anterior",
            weight: 12,
            key: "reaproveitar"
        },
      ]
    };
    console.log(r);
    return r
  };

  attachReact(element) {
    return ReactDOM.render(
      <CheckGroupCustomComp
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