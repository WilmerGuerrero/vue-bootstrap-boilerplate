<script setup lang="js">
import { DynamicTable } from '../components/shared/DynamicForm.vue';
import { reactive } from 'vue';
const tableColumns = [
  { key: 'id', label: 'Identificador' },
  { key: 'description', label: 'Descripción' },
  { key: 'status', label: 'Estado' },
  { key: 'actions', label: 'Acciones' }
];

const tableData = reactive([
  { id: 1, description: 'APA', status: 'Active' },
  { id: 2, description: 'MLA', status: 'Inactive' },
  { id: 3, description: 'Harvard', status: 'Active' },
  { id: 4, description: 'ISO 690', status: 'Inactive' },
]);

</script>

<template>
  <div>
    <b-modal
      ref="createForm"
      title="Crear tipo de bibliografía"
      hide-footer
    />
    <!-- </b-modal> -->
    <dynamic-table
      :table-fields="tableColumns"
      :table-data="tableData"
    />
  </div>
</template>