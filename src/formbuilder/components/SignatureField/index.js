import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/js/bootstrap.bundle'
import { ReactComponent } from "@formio/react/";
import SignaturePad from 'signature_pad/dist/signature_pad'

const SignatureCustomComp = class extends Component {
 constructor(props) {
  super(props);
  this.preview = React.createRef();
  this.obrigatorioLabel = React.createRef();
  this.rastrearLabel = React.createRef();
  this.ajudaLabel = React.createRef();
  this.canvasRef = React.createRef();

  this.state = {
   value: props.value,
   component: props.component
  };
 }

 componentDidMount() {
  if (this.state.component.obrigatorio) this.obrigatorioLabel.current.classList.remove('d-none');
  else this.obrigatorioLabel.current.classList.add('d-none');

  if (this.state.component.rastrear) this.rastrearLabel.current.classList.remove('d-none');
  else this.rastrearLabel.current.classList.add('d-none');

  if (this.state.component.mensagemAjuda) this.ajudaLabel.current.classList.remove('d-none');
  else this.ajudaLabel.current.classList.add('d-none');

  var canvas = this.canvasRef.current;

  new SignaturePad(canvas, {
   backgroundColor: 'rgb(255, 255, 255)'
  });
 }

 render() {
  return (
   <div>
    <div className="d-flex" style={{ height: '30px', gap: '5px' }}>
     <p>{this.state.component.titulo}</p>
     <span ref={this.obrigatorioLabel} style={{ color: 'red' }}>*</span>
     <i ref={this.rastrearLabel} class="bi bi-geo-alt-fill" ></i>
     <i ref={this.ajudaLabel} style={{ cursor: 'pointer' }} title={this.state.component.mensagemAjuda} class="bi bi-question-circle-fill"></i>
    </div>
    <div style={{ width: 'fit-content', border: '2px solid rgba(0,0,0,.1)', boxShadow: '2px 3px 3px rgba(0,0,0,.5)' }}>
     <canvas ref={this.canvasRef} width={400} id="signature-pad" class="signature-pad"></canvas>
    </div>
   </div>
  );
 }
};

export default class SignatureField extends ReactComponent {
 static get builderInfo() {
  return {
   title: "Assinatura",
   icon: "square",
   group: "inputs",
   documentation: "",
   weight: -10,
   schema: SignatureField.schema()
  };
 }

 static schema() {
  return ReactComponent.schema({
   type: "signatureFieldCustomComp",
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
   ]
  };
 }

 attachReact(element) {
  return ReactDOM.render(
   <SignatureCustomComp
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
