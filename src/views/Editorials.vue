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
              { label: 'Descripcion', name: 'description', type: 'text'},
          ],
          tableColumns: [
            { key: 'id', label: 'Identificador' },
            { key: 'description', label: 'Descripción' },
            { key: 'status', label: 'Estado' },
            { key: 'actions', label: 'Acciones' }
          ],
          tableData: Vue.observable([
            { id: 1, description: "Elsevier", status: true },
            { id: 2, description: "Springer", status: true },
            { id: 3, description: "Wiley", status: true },
            { id: 4, description: "Oxford University Press", status: true },
            { id: 5, description: "Cambridge University Press", status: true }
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
    