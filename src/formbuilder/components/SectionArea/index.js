import 'bootstrap/dist/js/bootstrap.bundle'
import Fieldset from "formiojs/components/fieldset/Fieldset";

export default class SectionArea extends Fieldset {
  static get builderInfo() {
    return {
      title: "Seção",
      icon: "square",
      group: "inputs",
      documentation: "",
      weight: -10,
      schema: SectionArea.schema()
    };
  }

  static schema() {
    return Fieldset.schema({
      type: "sectionAreaCustomComp",
      label: 'Legenda'
    });
  }

  static secoes = SectionArea.buscarSecoes();

  static editForm = function () {
    const secoes = SectionArea.secoes;
    const values = [];
    for (let secao of secoes) {
      let value = {
        label: secao.legend,
        value: secao.legend
      }
      values.push(value)
    }
    return {
      components: [
        {
          type: "checkbox",
          input: true,
          label: "Utilizar Seção Existente",
          weight: 12,
          key: "existentes"
        },
        {
          type: "textfield",
          input: true,
          label: "Titulo",
          weight: 12,
          key: "legend",
          conditional: {
            json: {
              '!==': [{
                var: 'data.existentes'
              }, true]
            }
          }
        },
        {
          type: "select",
          input: true,
          label: "Seções",
          weight: 12,
          key: "secoes",
          data: {
            values: values
          },
          conditional: {
            json: {
              '===': [{
                var: 'data.existentes'
              }, true]
            }
          }
        },
      ]
    };
  };


  constructor(component, options, data) {
    const selectedSecao = component.secoes;
    if (selectedSecao) {
      component.components = SectionArea.secoes.filter(s => s.legend === selectedSecao)[0].campos;
    }
    super(component, options, data);
  }

  render(content) {
    const selectedSecao = this.component.secoes;
    let el;
    if (selectedSecao) {
      const secao = SectionArea.secoes.filter(s => s.legend === selectedSecao)[0];
      el = this.buildFieldSet(secao);
    }
    return super.render(el);
  }

  buildFieldSet(secao) {
    let el = '<div ref="fieldSet-container" class="builder-components drag-container formio-builder-components">';
    const fieldset = document.createElement('div');
    fieldset.classList.add('fieldset-body');

    for (let campo of secao.campos) {
      const input = document.createElement('input');
      const label = document.createElement('p');
      label.innerHTML = campo.label;
      input.classList.add('form-control');
      fieldset.appendChild(label)
      fieldset.appendChild(input);
    }
    el += fieldset.innerHTML + '</div>';
    return el;
  }

  static buscarSecoes() {
    return [{
      legend: 'seção 1',
      campos: [{
        key: 'textfield',
        label: 'campo 1'
      },{
        key: 'textfield',
        label: 'campo 2'
      }]
    }, {
      legend: 'seção 2',
      campos: [{
        key: 'textfield',
        label: 'campo 1'
      }]
    },
    {
      legend: 'seção 3',
      campos: [{
        key: 'textfield',
        label: 'campo 1'
      }]
    },
    {
      legend: 'seção 4',
      campos: [{
        key: 'textfield',
        label: 'campo 1'
      }]
    },
    {
      legend: 'seção 2',
      campos: [{
        key: 'textfield',
        label: 'campo 1'
      }]
    }]
  }
}
