<!-- eslint-disable no-undef -->
<script setup>
defineProps({
  formElements: {
    type: Array,
    required: true
  }
});

const emits = defineEmits(['create'])

const formData = reactive({});

const handleSubmit = (event) => {
  emits('create', event);
  console.log('event', event);
};

</script>
<template>
  <b-form @submit.prevent="handleSubmit">
    <b-form-group 
      v-for="(element, index) in formElements" 
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
    >Submit</b-button>
  </b-form>
</template>
  

  