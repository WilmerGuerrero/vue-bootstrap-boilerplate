
<template>
    <div>
        <b-table 
            class="dynamic-table"
            :items="tableData" 
            :fields="tableFields" 
        >
            <template #cell(actions)="row">
            <b-button 
                class="action-buttons"
                variant="secondary" 
                @click="handleModify(row.item)"
            >Editar</b-button>
            <b-button 
                class="action-buttons"
                variant="danger" 
                @click="handleDelete(row.item)"
            >Eliminar
            </b-button>
            </template>
        </b-table>
    </div>
</template>

  <!-- eslint-disable no-undef -->
  <script>
  import { BTable, BButton } from 'bootstrap-vue';
  
  export default {
    components: {
      BTable,
      BButton
    },
    props: {
      tableData: {
        type: Array,
        required: true
      },
      tableFields: {
        type: Array,
        required: true
      }
    },
    emits: ['update', 'delete'],
    methods: {
      handleModify(item) {
        // Handle modify action for the item
        this.$emit('update', item);
      },
      handleDelete(item) {
        // Handle delete action for the item
        this.$emit('delete', item);
      }
    }
  };
</script>
<style scoped>

.dynamic-table {
    min-width: 900px;
}

.action-buttons {
    margin: 0 20px;
}
</style>