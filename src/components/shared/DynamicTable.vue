<!-- eslint-disable no-undef -->
<script setup lang="js">
import { BTable, BButton } from 'bootstrap-vue';
  
defineProps({
    tableData: {
      type: Array,
      required: true
    },
    tableFields: {
      type: Array,
      required: true
    }
});

const emits = defineEmits(['update', 'delete']);
  
  const handleModify = (item) => {
    // Handle modify action for the item
    emits('update', item);
  };
  
  const handleDelete = (item) => {
    // Handle delete action for the item
    emits('delete', item);
  };
  </script>

<template>
  <b-table 
    :items="tableData" 
    :fields="tableFields" 
    hover 
    striped 
    responsive
  >
    <template #cell(actions)="row">
      <b-button 
        variant="primary" 
        @click="handleModify(row.item)"
      >Modify</b-button>
      <b-button 
        variant="danger" 
        @click="handleDelete(row.item)"
      >Delete</b-button>
    </template>
  </b-table>
</template>

  