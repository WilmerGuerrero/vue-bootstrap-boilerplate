<template>
  <b-form @submit.prevent="handleSubmit">
    <b-form-group 
      v-for="(element, index) in formInputs" 
      :key="index" 
      :label="element.label" 
      :label-for="element.name"
    >
    <b-form-input 
        v-model="formData[element.name]"
        :type="element.type" 
        :name="element.name" 
      />
    </b-form-group>
    <b-button 
      type="submit" 
      variant="primary"
    >Guardar</b-button>
  </b-form>
</template>
  
  <script>
  import { reactive } from 'vue';
  
  export default {
    props: {
      formInputs: {
        type: Array,
        required: true
      }
    },
    emits: ['create'],
    data() {
      return {
        formData: reactive({})
      };
    },
    methods: {
      handleSubmit() {
        this.$emit('onCreate', this.formData);
        console.log('before', this.formData);
      }
    }
  };
  </script>

<style scoped>
button[type="submit"] {
    margin-top: 15px;
}
</style>