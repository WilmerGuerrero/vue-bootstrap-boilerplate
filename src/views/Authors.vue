<template>
    <div>
      <b-button 
          variant="primary" 
          @click="openModal()"
      >Crear Editorial
      </b-button>
      <b-modal
        id="createForm"
        ref="createForm"
        title="Crear Editorial"
        hide-footer
      >
          <dynamic-form
              :formInputs="formInputs"
              @onCreate="saveForm($event)">
  
          </dynamic-form>
      </b-modal>
      <dynamic-table
        :table-fields="tableColumns"
        :table-data="tableData"
      />
    </div>
  </template>
    
    <script>
    import DynamicTable  from '../components/DynamicTable.vue';
    import DynamicForm  from '../components/DynamicForm.vue';
    import Vue from 'vue';
    import { BButton, BModal } from 'bootstrap-vue';
    
    export default {
      components: {
        DynamicTable,
        DynamicForm,
        BButton,
        BModal
      },
      data() {
        return {
          formInputs: [
              { label: 'Nombre', name: 'name', type: 'text'},
              { label: 'Pais', name: 'country', type: 'text'},
              { label: 'Idioma', name: 'language', type: 'text'},
          ],
          tableColumns: [
            { key: 'id', label: 'Identificador' },
            { key: 'name', label: 'Nombre' },
            { key: 'country', label: 'Pais' },
            { key: 'language', label: 'Idioma' },
            { key: 'status', label: 'Estado' },
            { key: 'actions', label: 'Acciones' }
          ],
          tableData: Vue.observable([
            {
                id: 1,
                name: "Jane Austen",
                country: "United Kingdom",
                language: "English",
                status: true
            },
            {
                id: 2,
                name: "Gabriel García Márquez",
                country: "Colombia",
                language: "Spanish",
                status: true
            },
            {
                id: 3,
                name: "Haruki Murakami",
                country: "Japan",
                language: "Japanese",
                status: true
            },
            {
                id: 4,
                name: "J.K. Rowling",
                country: "United Kingdom",
                language: "English",
                status: true
            },
            {
                id: 5,
                name: "Isabel Allende",
                country: "Chile",
                language: "Spanish",
                status: true
            }
            ])
        };
      }, 
      methods: {
          openModal() {
              this.$bvModal.show('createForm')
          },
          saveForm(tmp) {
              console.log('form', tmp);
              this.$bvModal.hide('createForm')
          }
      }
    };
    </script>
    