import { Components, FormBuilder } from '@formio/react';
import { useState } from 'react';
import './App.css';
import components from "./formbuilder";

Components.setComponents(components);

function App() {
  const [jsonSchema, setSchema] = useState({});
  const jsonGLP = {
    components: [
      {
        type: 'sectionAreaCustomComp',
        key: 'preco-secao',
        legend: 'Seção Preco',
        components: [{
          type: 'textFieldCustomComp',
          key: 'nome-posto',
          label: 'Nome Posto'
        },{
          type: 'numberFieldCustomComp',
          key: 'preco-1',
          label: 'Preço 1'
        },{
          type: 'numberFieldCustomComp',
          key: 'preco-2',
          label: 'Preço 2'
        }]
      },
      {
        type: 'sectionAreaCustomComp',
        key: 'foto-secao',
        legend: 'Seção Foto',
        edit: false,
        components: [{
          type: 'textFieldCustomComp',
          key: 'nome-posto',
          label: 'Campo Nome'
        },{
          type: 'fotografiaFieldCustomComp',
          key: 'preco-1',
          label: 'Foto 1'
        },{
          type: 'fotografiaFieldCustomComp',
          key: 'preco-2',
          label: 'Foto 2'
        }]
      },{
        type: 'signatureFieldCustomComp',
        key: 'nome-posto',
        label: 'Campo Assinatura'
      }
    ]
  }

  return (
    <div className="App">
      <button onClick={() => console.log(jsonSchema)}>JSON</button>
      <div>
        <button onClick={e => setSchema(jsonGLP)}>Formulário GLP</button>
        <button>Formulário AUTO</button>
      </div>
      <FormBuilder form={jsonSchema}
        onChange={(schema) => setSchema(schema)}
        options={{
          // noNewEdit: true,
          noDefaultSubmitButton: true,
          language: 'pt',
          i18n: {
            pt: {
              'Drag and Drop a form component': 'Arrate os itens para formar o formulario',
              'Search field(s)': 'Procure os campo(s)',
              'Component': '',
              'Save': 'Salvar',
              'Cancel': 'Cancelar',
              'Remove': 'Remover',
              'Preview': 'Pré-visualização',
              'Help': 'Ajuda',
              'Copy': 'Copiar',
              'Edit': 'Editar',
            }
          },
          builder: {
            inputs: {
              title: 'Campos',
              weight: 10,
              default: true,
              components: {
                textFieldCustomComp: true,
                numberFieldCustomComp: true,
                fotografiaFieldCustomComp: true,
                radioFieldCustomComp: true,
                inputFileFieldCustomComp: true,
                selectCustomComp: true,
                dateFieldCustomComp: true,
                signatureFieldCustomComp: true,
                sectionAreaCustomComp: true,
                checkBoxGroupCustomComp: true,
                testing: true
              },
            },
            basic: false,
            advanced: false,
            resource: false,
            premium: false,
            layout: false,
            data: false
          }
        }} />
    </div>
  );
}

export default App;
