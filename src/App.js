import { Components, FormBuilder } from '@formio/react';
import { useState } from 'react';
import './App.css';
import components from "./formbuilder";

Components.setComponents(components);

function App() {
  const [jsonSchema, setSchema] = useState({})
  return (
    <div className="App">
      <button onClick={() => console.log(jsonSchema)}>JSON</button>
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
                subformularioFieldCustomComp: true,
                assinaturaFieldCustomComp: true
              }
            },
            // basic: false,
            // advanced: false,
            // resource: false,
            // premium: false,
            // layout: false,
            // data: false
          }
        }} />
    </div>
  );
}

export default App;
